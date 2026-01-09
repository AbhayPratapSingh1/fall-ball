/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;

let ball;
let ground;
let ground2;
function setup() {
  createCanvas(400, 800);
  ball = new Ball(100, 30, 5);
  ground = new Ground(200, 500, 100);
  ground2 = new AliveGround(100, 300, 100);
  ground3 = new SpikesGround(300, 500, 100);

  ball.blocks.push(ground);
  ball.blocks.push(ground2);
  ball.spikesBlocks.push(ground3);
}

function draw() {
  background(220);

  ball.draw();
  ball.update();
  ground.draw();
  ground2.draw();
  ground3.draw();

  ground2.decreaseLife();
  if (ball.isGameOver()) {
    background(1);
    noLoop();
  }
}
