const NORMAL_PROB = 1;
const SPIKE_PROB = 1;
const ALIVE_PROB = 1;
const BLOCK_SIZE = 100;
const CHACE_TO_GEN_BLOCK = 0.002;

const createGame = () => {
  const ball = new Ball(100, 30, 10);

  ball.blocks.push(new Ground(200, 500, 100));
  ball.aliveBlocks.push(new AliveGround(100, 300, 100));
  ball.spikesBlocks.push(new SpikesGround(300, 500, 100));

  let score = 0;
  return { ball, score };
};

const showScore = (score) => {
  push();
  textSize(20);
  textAlign("right", "top");
  text(`Score : ${Math.round(score)}`, width - 10, 10);
  pop();
};

const generateBlocks = () => {
  const chance = random(0, NORMAL_PROB + SPIKE_PROB + ALIVE_PROB);
  const x = random(0, width - BLOCK_SIZE);
  let block;
  let type = "blocks";
  if (chance < NORMAL_PROB) {
    block = new Ground(x, height, BLOCK_SIZE);
  } else if (chance < SPIKE_PROB + NORMAL_PROB) {
    block = new SpikesGround(x, height, BLOCK_SIZE);
    type = "spikesBlocks";
  } else {
    block = new AliveGround(x, height, BLOCK_SIZE);
    type = "aliveBlocks";
  }

  GAME_OBJECTS.ball[type].push(block);
};

let increasingFactor = 0;

const downwardSpikes = (size = SPIKES_HEIGHT, length = width) => {
  noStroke();
  fill("grey");
  push();

  for (let index = -size; index < length; index += size) {
    triangle(index, 0, index + size * 2, 0, index + size, size);
  }
  pop();
};

const upwardSpikes = (size = SPIKES_HEIGHT, length = width, color = "grey") => {
  push();

  noStroke();
  fill(color);

  for (let index = -size; index < length; index += size) {
    triangle(index, 0, index + size * 2, 0, index + size, -size);
  }

  pop();
};

const addPlateFormIfNecessary = () => {
  let totalChance = increasingFactor + CHACE_TO_GEN_BLOCK;
  if (random(0, 1 / totalChance) < 2) {
    generateBlocks();
    increasingFactor = 0;
    return;
  }
  increasingFactor += 0.0001;
};

const playing = () => {
  //display part
  frameRate(60);
  background(220);
  fill(1);

  showScore(GAME_OBJECTS.score);
  downwardSpikes();
  upwardSpikes();

  // game Utility
  if (round(GAME_OBJECTS.score, 1) % 100 === 0) {
    SCREEN_SPEED += 0.5;
  }
  addPlateFormIfNecessary();

  // draw logic here
  GAME_OBJECTS.ball.draw();
  GAME_OBJECTS.ball.blocks.forEach((each) => each.draw());
  GAME_OBJECTS.ball.aliveBlocks.forEach((each) => each.draw());
  GAME_OBJECTS.ball.spikesBlocks.forEach((each) => each.draw());

  // update logic here
  GAME_OBJECTS.ball.update();
  GAME_OBJECTS.ball.blocks.forEach((each) => each.update());
  GAME_OBJECTS.ball.aliveBlocks.forEach((each) => each.update());
  GAME_OBJECTS.ball.spikesBlocks.forEach((each) => each.update());

  // Game Over and Scores updation
  if (GAME_OBJECTS.ball.isGameOver()) {
    STATUS = "end";
    return;
  }

  GAME_OBJECTS.score += 0.1;
};
