class Ball {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.v = createVector(0, 0);
    this.gravity = createVector(0, GRAVITY);
    this.size = size;

    this.blocks = [];
    this.aliveBlocks = [];
    this.spikesBlocks = [];
    this.frictionCofficient = FRICTION_COFFICIENT;
  }

  applyGravity() {
    this.v.add(this.gravity);
    this.v.y = Math.min(MAX_VELOCITY, this.v.y);
  }

  isGameOver() {
    if (this.pos.y < 10 || this.pos.y > height) {
      return true;
    }
    const v = this.spikesBlocks.some((block) => block.isOnGround(this));

    return this.spikesBlocks.some((block) => block.isOnGround(this));
  }

  update() {
    this.applyGravity();
    let block = this.blocks.find((each) => each.isOnGround(this));
    if (!block) {
      block = this.aliveBlocks.find((each) => each.isOnGround(this));
    }

    if (block) {
      this.pos.x += this.v.x;
      this.v.y = 0;
      this.pos.y = block.pos.y - this.size / 2;
      if (block.type === "alive") {
        block.startConsuming();
      }
    } else {
      this.pos.add(this.v);
    }

    this.action();

    // managing the friction
    if (this.v.x !== 0) {
      this.v.x += this.frictionCofficient * -this.v.x;
    }

    // managing the side limit
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.v.x = 0;
    }
    if (this.pos.x > width) {
      this.pos.x = width - 1;
      this.v.x = 0;
    }
  }

  action() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.v.x += SENSITVITY;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.v.x -= SENSITVITY;
    }
    if (this.v.x > 0) {
      this.v.x = Math.min(this.v.x, MAX_VELOCITY);
    } else {
      this.v.x = Math.max(this.v.x, -MAX_VELOCITY);
    }
  }

  draw() {
    circle(this.pos.x, this.pos.y, this.size);
    stroke(1);
  }
}
