//----------Varibles----------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let screenWidth = 1000;
let screenHeight = 500;

//clears the canvas
ctx.clearRect(0, 0, screenWidth, screenHeight);

//draw the background
ctx.drawImage(levels[currentLevel].background, 0, 0);