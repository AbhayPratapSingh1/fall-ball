/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;

let SCREEN_SPEED = 1;

let STATUS = "playing";
let GAME_OBJECTS = null;

function setup() {
  GAME_OBJECTS = createGame();
  createCanvas(400, 800);
}

const modes = {
  start,
  playing,
  end,
};

function draw() {
  modes[STATUS]();
}
