const isBetween = (min, val, max) => {
  return min < val && val < max;
};
const nearlyEqual = (a, b) => {
  return Math.abs(a - b) < 5;
};

class AliveGround {
  constructor(x, y, size) {
    this.pos = createVector(x, y);

    this.size = size;

    this.isAlive = true;
    this.liveLeft = ALIVE_BLOCK_DURATION;
  }

  isOnGround(obj) {
    if (!this.isAlive) {
      return false;
    }

    if (!isBetween(this.pos.x, obj.pos.x, this.pos.x + this.size)) {
      return false;
    }

    return nearlyEqual(this.pos.y - 1, obj.pos.y + obj.size / 2);
  }

  decreaseLife() {
    if (this.isAlive) {
      if (this.liveLeft === 0) {
        this.isAlive = false;
      } else {
        this.liveLeft -= 1;
      }
    }
  }

  draw() {
    if (this.isAlive) {
      push();
      translate(this.pos.x, this.pos.y);
      stroke(1);
      rect(0, 0, this.size, 4);
      pop();
    }
  }
}

class Ground {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.size = size;
  }

  isOnGround(obj) {
    if (!isBetween(this.pos.x, obj.pos.x, this.pos.x + this.size)) {
      return false;
    }

    return nearlyEqual(this.pos.y - 1, obj.pos.y + obj.size / 2);
  }

  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(1);
    rect(0, 0, this.size, 4);
    pop();
  }
}

class SpikesGround {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.size = size;
  }

  isOnGround(obj) {
    if (!isBetween(this.pos.x, obj.pos.x, this.pos.x + this.size)) {
      return false;
    }

    return nearlyEqual(this.pos.y - 1, obj.pos.y + obj.size / 2);
  }

  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255, 0, 0);
    rect(0, 0, this.size, 4);
    pop();
  }
}
