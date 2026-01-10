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

const createGame = () => {
  const ball = new Ball(100, 30, 5);

  const ground = createGrounds();
  const aliveGround = createAliveGround();
  const spikes = createSpikes();

  ground.map((ground) => ball.blocks.push(ground));
  aliveGround.map((ground) => ball.blocks.push(ground));
  spikes.map((ground) => ball.spikesBlocks.push(ground));
  let score = 0;
  return { ball, ground, aliveGround, spikes, score };
};
