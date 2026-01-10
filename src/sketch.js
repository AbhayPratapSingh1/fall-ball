/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;
const SCREEN_SPEED = 1;

let STATUS = "end";

let ball;

const createGrounds = () => {
  const ground = [];
  ground.push(new Ground(200, 500, 100));
  ground.push(new Ground(500, 900, 100));
  ground.push(new Ground(200, 1700, 100));
  ground.push(new Ground(100, 2500, 100));
  return ground;
};

const createAliveGround = () => {
  const ground = [];
  ground.push(new AliveGround(100, 300, 100));
  ground.push(new AliveGround(300, 800, 100));
  ground.push(new AliveGround(500, 1500, 100));
  ground.push(new AliveGround(50, 1300, 100));
  return ground;
};

const createSpikes = () => {
  const ground = [];
  ground.push(new SpikesGround(300, 500, 100));
  ground.push(new SpikesGround(500, 1000, 100));
  ground.push(new SpikesGround(200, 1400, 100));
  return ground;
};

let ground;
let aliveGround;
let spikes;

function setup() {
  createCanvas(400, 800);
  ball = new Ball(100, 30, 5);
  ground = createGrounds();
  aliveGround = createAliveGround();
  spikes = createSpikes();

  ground.map((ground) => ball.blocks.push(ground));
  aliveGround.map((ground) => ball.blocks.push(ground));
  spikes.map((ground) => ball.spikesBlocks.push(ground));
}

const start = () => {
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
    STATUS = "playing";
  }
};

const playing = () => {
  background(220);

  ball.draw();
  ball.update();

  ground.map((each) => each.draw());
  aliveGround.map((each) => each.draw());
  spikes.map((each) => each.draw());

  ground.map((each) => each.update());
  aliveGround.map((each) => each.update());
  spikes.map((each) => each.update());

  aliveGround.map((each) => each.decreaseLife());

  if (ball.isGameOver()) {
    STATUS = "end";
  }
};

const end = () => {
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
    STATUS = "playing";
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
