// Import dependencies
import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [status, setStatus] = useState("Game in progress...");
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [time, setTime] = useState({ white: 300, black: 300 }); // 5 minutes per player
  const [turn, setTurn] = useState("w");
  const [playAI, setPlayAI] = useState(false);
  const [playWithPlayer, setPlayWithPlayer] = useState(true);

  useEffect(() => {
    updateStatus();
    if (playAI && game.turn() === "b" && !game.isGameOver()) {
      setTimeout(makeAIMove, 500); // Faster AI response
    }
    setTurn(game.turn());
  }, [fen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (game.isGameOver()) return prevTime;
        return {
          ...prevTime,
          [turn]: prevTime[turn] > 0 ? prevTime[turn] - 1 : 0
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [turn]);

  function evaluateBoard() {
    return game.moves().length; // Simple evaluation based on available moves
  }

  function minimax(depth, isMaximizing) {
    if (depth === 0 || game.isGameOver()) {
      return evaluateBoard();
    }

    const moves = game.moves();
    let bestValue = isMaximizing ? -Infinity : Infinity;

    for (let move of moves) {
      game.move(move);
      const value = minimax(depth - 1, !isMaximizing);
      game.undo();
      bestValue = isMaximizing ? Math.max(bestValue, value) : Math.min(bestValue, value);
    }
    return bestValue;
  }

  function getBestMove() {
    let bestMove = null;
    let bestValue = -Infinity;
    const moves = game.moves();

    for (let move of moves) {
      game.move(move);
      const moveValue = minimax(3, false); // Depth 3 for better AI
      game.undo();

      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = move;
      }
    }
    return bestMove;
  }

  function makeAIMove() {
    if (game.isGameOver()) {
      return;
    }
    const bestMove = getBestMove();
    if (bestMove) {
      game.move(bestMove);
      setFen(game.fen());
      setHistory([...history, bestMove]);
      setRedoStack([]);
    }
  }

  function onDrop(sourceSquare, targetSquare) {
    if (!playWithPlayer && game.turn() === "b") return false;
    const move = game.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    if (move) {
      setFen(game.fen());
      setHistory([...history, move.san]);
      setRedoStack([]);
      if (playAI && game.turn() === "b") {
        setTimeout(makeAIMove, 500);
      }
      return true;
    }
    return false;
  }

  function undoMove() {
    if (history.length > 0) {
      game.undo();
      setFen(game.fen());
      setRedoStack([history.pop(), ...redoStack]);
    }
  }

  function redoMove() {
    if (redoStack.length > 0) {
      const nextMove = redoStack.shift();
      game.move(nextMove);
      setFen(game.fen());
      setHistory([...history, nextMove]);
    }
  }

  function updateStatus() {
    if (game.isCheckmate()) {
      setStatus(`Game over! ${game.turn() === "w" ? "Black" : "White"} wins by checkmate.`);
    } else if (game.isDraw()) {
      setStatus("Game over! It's a draw.");
    } else {
      setStatus(`Turn: ${game.turn() === "w" ? "White" : "Black"}`);
    }
  }

  function restartGame() {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
    setStatus("Game in progress...");
    setHistory([]);
    setRedoStack([]);
    setTime({ white: 300, black: 300 });
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen w-full h-full text-white" style={{ backgroundImage: "url('/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h1 className="text-xl font-bold mb-4">Chess Game</h1>
      <p className="mb-2 text-lg">{status}</p>
      <div className="flex gap-4 text-lg">
        <p>White: {time.white}s</p>
        <p>Black: {time.black}s</p>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={() => setPlayWithPlayer(true)} className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Play with Another Player</button>
        <button onClick={() => { setPlayAI(!playAI); setPlayWithPlayer(false); }} className="p-2 bg-purple-500 text-white rounded hover:bg-purple-700">
          {playAI ? "Disable AI" : "Play Against AI"}
        </button>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={restartGame} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Restart</button>
        <button onClick={undoMove} className="p-2 bg-red-500 text-white rounded hover:bg-red-700">Undo</button>
        <button onClick={redoMove} className="p-2 bg-green-500 text-white rounded hover:bg-green-700">Redo</button>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <Chessboard position={fen} onPieceDrop={onDrop} boardWidth={500} />
      </div>
    </div>
  );
}

