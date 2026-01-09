class Ball {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.v = createVector(0, 0);
    this.gravity = createVector(0, GRAVITY);
    this.size = size;
    this.blocks = [];
  }

  applyGravity() {
    this.v.add(this.gravity);
    this.v.y = Math.min(MAX_VELOCITY, this.v.y);
  }

  update() {
    this.applyGravity();
    if (!(this.blocks.some((each) => each.aboveBox(this.pos)))) {
      this.pos.add(this.v);
    }
  }
  draw() {
    circle(this.pos.x, this.pos.y, this.size);

    stroke(1);
  }
}
