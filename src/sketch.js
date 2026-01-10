/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;
const SCREEN_SPEED = 1;

let STATUS = "playing";
let GAME_OBJECTS = null;

function setup() {
  GAME_OBJECTS = createGame();
  createCanvas(400, 800);
}

const start = () => {
  frameRate(10);
  background(220);
  textSize(50);
  text("hello", 0, 30, 100, 100);
  textSize(20);
  text("Please Design this page", 0, 100, 1000, 100);

  push();
  textAlign("center");
  textSize(30);
  text("<--Press Enter to Start-->", 0, 150, width, 100);
  pop();
  if (keyIsDown(ENTER)) {
    GAME_OBJECTS = createGame();
    STATUS = "playing";
  }
};

const showScore = (score) => {
  push();
  textSize(20);
  textAlign("right", "top");
  text;
  text(`Score : ${Math.round(score)}`, width - 10, 10);
  pop();
};

const playing = () => {
  frameRate(60);
  background(220);
  showScore(GAME_OBJECTS.score);

  GAME_OBJECTS.ball.draw();
  GAME_OBJECTS.ball.update();

  GAME_OBJECTS.ground.map((each) => each.draw());
  GAME_OBJECTS.aliveGround.map((each) => each.draw());
  GAME_OBJECTS.spikes.map((each) => each.draw());

  GAME_OBJECTS.ground.map((each) => each.update());
  GAME_OBJECTS.aliveGround.map((each) => each.update());
  GAME_OBJECTS.spikes.map((each) => each.update());

  GAME_OBJECTS.aliveGround.map((each) => each.decreaseLife());

  if (GAME_OBJECTS.ball.isGameOver()) {
    STATUS = "end";
    return;
  }
  GAME_OBJECTS.score += 0.1;
};

const end = () => {
  frameRate(10);
  background(220);
  textSize(50);
  text("Game Over", 0, 30, 500, 200);
  textSize(20);

  text("Please Help To Design this page", 0, 100, 1000, 100);

  push();
  textAlign("center");
  textSize(30);
  text("<--Press Enter to Start-->", 0, 150, width, 100);
  pop();
  if (keyIsDown(ENTER)) {
    STATUS = "start";
  }
};

const modes = {
  start,
  playing,
  end,
};

function draw() {
  modes[STATUS]();
}
