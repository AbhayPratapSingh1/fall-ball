/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
let ball;
function setup() {
  createCanvas(400, 800);
  ball = new Ball(100, 30, 5);
}

function draw() {
  background(220);

  ball.draw();
  ball.update();
}
