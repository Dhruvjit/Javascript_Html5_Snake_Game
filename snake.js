const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load
const ground = new Image();
ground.src = "img/ground.png"

const foodImg = new Image();
foodImg.src = "img/foodImg.png"