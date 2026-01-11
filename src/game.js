const NORMAL_PROB = 2;
const SPIKE_PROB = 1;
const ALIVE_PROB = 1;
const BLOCK_SIZE = 100;
const CHACE_TO_GEN_BLOCK = 0.002;

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

const createGame = () => {
  const ball = new Ball(100, 30, 10);

  const blocks = createGrounds();
  const aliveBlocks = createAliveGround();
  const spikesBlocks = createSpikes();

  blocks.map((ground) => ball.blocks.push(ground));
  aliveBlocks.map((ground) => ball.aliveBlocks.push(ground));
  spikesBlocks.map((ground) => ball.spikesBlocks.push(ground));
  let score = 0;

  return { ball, blocks, aliveBlocks, spikesBlocks, score };
};

const showScore = (score) => {
  push();
  textSize(20);
  textAlign("right", "top");
  text;
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
  GAME_OBJECTS[type].push(block);
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
  noStroke();
  fill(color);

  push();

  for (let index = -size; index < length; index += size) {
    triangle(index, 0, index + size * 2, 0, index + size, -size);
  }
  pop();
};

const playing = () => {
  frameRate(60);
  background(220);

  fill(1);

  if (round(GAME_OBJECTS.score, 1) % 100 === 0) {
    SCREEN_SPEED += 0.5;
  }

  showScore(GAME_OBJECTS.score);
  let totalChance = increasingFactor + CHACE_TO_GEN_BLOCK;

  if (random(0, 1 / totalChance) < 2) {
    generateBlocks();
    increasingFactor = 0;
  } else {
    increasingFactor += 0.0001;
  }

  // draw logic here
  GAME_OBJECTS.ball.draw();
  GAME_OBJECTS.blocks.forEach((each) => each.draw());
  GAME_OBJECTS.aliveBlocks.forEach((each) => each.draw());
  GAME_OBJECTS.spikesBlocks.forEach((each) => each.draw());

  // update logic here
  GAME_OBJECTS.ball.update();
  GAME_OBJECTS.blocks.forEach((each) => each.update());
  GAME_OBJECTS.aliveBlocks.forEach((each) => each.update());
  GAME_OBJECTS.spikesBlocks.forEach((each) => each.update());
  
  
  
  if (GAME_OBJECTS.ball.isGameOver()) {
    STATUS = "end";
    return;
  }
  downwardSpikes();
  upwardSpikes();

  GAME_OBJECTS.score += 0.1;
};
