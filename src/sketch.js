/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;

let ball;
function setup() {
  createCanvas(800, 400);
  ball = new Ball(100, 30, 5);
}

function draw() {
  background(220);

  ball.draw();
  ball.update();
}
