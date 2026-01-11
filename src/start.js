const drawBg = (length = 40, color = [255, 0, 0], bgColor = [1, 1, 1]) => {
  const di = length * 1.5;
  const hfDi = length / 2;

  fill(color);

  stroke(bgColor);
  strokeWeight(1);
  push();

  let i = 0;
  translate(0, -di);
  for (let idx = 0; idx < height + di; idx += hfDi) {
    if (i % 4 === 0 && i !== 0) {
      translate(4 * hfDi, 0);
    }
    translate(-hfDi, hfDi);

    i++;
    push();
    for (let index = 0; index < width; index += di) {
      drawBrickHorizontal(length);
      translate(length, 0);
      drawBrickVertical(length);
      translate(length, 0);
    }
    pop();
  }
  pop();
};

const heading = (sentence) => {
  textSize(50);
  textAlign("center");
  text(sentence, 0, 30, width, height);
};

const subHeading = (sentence) => {
  textSize(20);
  text(sentence, 0, 100, width, height);
};

const bottomMess = (message) => {
  textSize(18);
  text(message, 0, height - 30, width, height);
};

const start_callback = () => {
  if (keyIsDown(LEFT_ARROW)) {
    SENSITVITY = Math.max(0.1, SENSITVITY - 0.1);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    SENSITVITY = Math.min(SENSITVITY + 0.1, 3);
  }

  if (keyIsDown(ENTER)) {
    SCREEN_SPEED = 1;
    GAME_OBJECTS = createGame();
    STATUS = "playing";
  }
};

const start = () => {
  frameRate(10);
  background(220);
  drawBg(80, [250, 0, 0, 150], [10, 10, 10, 250]);

  fill(1);
  heading("Fall-Down");
  subHeading(`Senstivity : ${round(SENSITVITY, 1)}`);
  bottomMess("——  Enter to Start  ——");

  start_callback();
};
