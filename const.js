const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load the ground image
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// create the snake
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

// create the food
let food = {
    // 17 boxes and 15 boxes are the limit of inside canvas board
    x: Math.floor(Math.random()*17+1) * box,
    y: Math.floor(Math.random()*15+3) * box
};

// create the score
let score = 0;
