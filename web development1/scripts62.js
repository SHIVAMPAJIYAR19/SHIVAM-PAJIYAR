// console.log("this 62 learning parts");

// console.log("adjectives");
// function adjectives(){
//     let adjective=["crazy","amazings","fire"];
//     if(adjective.length<=20){
//         console.log(adjective);
//     }
//     else{
//         console.log("nothing");
//     }
//     // console.log("crazy");
//     // console.log("amazing");
//     // console.log("fire");
// //    console.log(adjective);
// //    return adjective
// }



// function shops(){
//     let shop=["engine","food","garments"];
    
//     if(shop.length<=20){
//         console.log(shop);
//     }
//     else{
//         console.log("nothing");
//     }
//     // console.log("engine");
//     // console.log("food");
//     // console.lo("garments");
// }


// function anothers(){
//     let another=["bross","limited","hub"];
    
//     if(another.length<=20){
//         console.log(another);
//     }
//     else{
//         console.log("nothing");
//     }
//     // console.log("bross");
//     // console.log("limited");
//     // console.log("hub");
// }

// console.log(adjectives());
// console.log(shops());
// console.log(anothers());


console.log("this 62 learning parts");

console.log("adjectives");

function getRandomWord(str) {
    let words = str.split(' ');
    return words[Math.floor(Math.random() * words.length)];
}

function adjectives() {
    let adjective = "crazy amazings fire"; // Use a string with words separated by spaces
    let randomWord = getRandomWord(adjective);
    console.log(adjective);
    return randomWord;
}

function shops() {
    let shop = "engine food garments"; // Use a string with words separated by spaces
    let randomWord = getRandomWord(shop);
    console.log(shop);
    return randomWord;
}

function anothers() {
    let another = "bross limited hub"; // Use a string with words separated by spaces
    let randomWord = getRandomWord(another);
    console.log(another);
    return randomWord;
}

console.log(adjectives()); // Outputs the string and a random word from it
console.log(shops());      // Outputs the string and a random word from it
console.log(anothers());   // Outputs the string and a random word from it


// let a='string name';
// console.log(a.split(''));