/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;
const SCREEN_SPEED = 1;

let ball;

const createGrounds = () => {
  const ground = [];
  ground.push(new Ground(200, 500, 100));
  return ground;
};

const createAliveGround = () => {
  const ground = [];
  ground.push(new AliveGround(100, 300, 100));
  return ground;
};

const createSpikes = () => {
  const ground = [];
  ground.push(new SpikesGround(300, 500, 100));
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

function draw() {
  background(220);

  ball.draw();
  ball.update();

  ground.map((each) => each.draw());
  aliveGround.map((each) => each.draw());
  aliveGround.map((each) => each.decreaseLife());

  spikes.map((each) => each.draw());

  if (ball.isGameOver()) {
    background(1);
    noLoop();
  }
}
