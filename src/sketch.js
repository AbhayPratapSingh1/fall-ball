/// <reference types="p5/global"/>
// @ts-nocheck

const GRAVITY = 0.1;
const MAX_VELOCITY = 5;
const FRICTION_COFFICIENT = 0.05;
const ALIVE_BLOCK_DURATION = 100;
const SPIKES_HEIGHT = 14;

let SCREEN_SPEED = 1;
let SENSITVITY = 1;

let STATUS = "start";
let GAME_OBJECTS = null;

// Playing Game Constants
const NORMAL_PROB = 1;
const SPIKE_PROB = 1;
const ALIVE_PROB = 1;
const BLOCK_SIZE = 100;
const CHACE_TO_GEN_BLOCK = 0.002;

function setup() {
  GAME_OBJECTS = createGame();
  createCanvas(400, 800);
}

const modes = {
  start,
  playing,
  end,
};

const drawBrickHorizontal = (length) => {
  rect(0, 0, length, length / 2);
};
const drawBrickVertical = (length) => {
  rect(0, 0, length / 2, length);
};

function draw() {
  modes[STATUS]();
}
