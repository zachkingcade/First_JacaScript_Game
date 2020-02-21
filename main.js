//----------Varibles----------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

let screenWidth = 1000;
let screenHeight = 500;

//quick draw test
let testPlayer = new Player(500, 250, 96, 104, 0, 0);
testPlayer.sprites.idleDown = new Sprite("");
testPlayer.sprites.idleDown.import("./Assets/link/Idle_Down/tile00",".png",4);
testPlayer.sprites.idleDown.frameTickChange = .5

//clears the canvas
ctx.clearRect(0, 0, screenWidth, screenHeight);

//test draw of character
window.setInterval(function(){
if (testPlayer.sprites.idleDown.ready()){
    ctx.drawImage(testPlayer.sprites.idleDown.draw(),testPlayer.x,testPlayer.y);
}
},100);
