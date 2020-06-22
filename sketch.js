var player,hurdles;
var canvas;

var game1, form;
var allPlayers;

function setup() {
canvas = createCanvas(800,400);
game1 = new game();
game1.getState();
game1.start();

//createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}