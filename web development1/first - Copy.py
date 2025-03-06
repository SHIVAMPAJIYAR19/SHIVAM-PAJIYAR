import turtle

# Set up the screen
screen = turtle.Screen()
screen.bgcolor("white")

# Create a turtle object
pen = turtle.Turtle()
pen.speed(5)

# Function to draw a square
def draw_square(size):
    for _ in range(4):
        pen.forward(size)
        pen.right(90)

# Function to draw the logo
def draw_logo():
    colors = ["red", "green", "blue", "yellow"]
    size = 100
    for color in colors:
        pen.color(color)
        draw_square(size)
        pen.right(45)

# Draw the logo
draw_logo()

# Hide the turtle and display the result
pen.hideturtle()
screen.mainloop()
