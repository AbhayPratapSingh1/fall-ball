const start = () => {
  frameRate(10);
  background(220);
  textSize(50);
  text("hello", 0, 30, 100, 100);
  textSize(20);
  text("Please Design this page", 0, 100, 1000, 100);

  push();
  textAlign("center");
  textSize(30);
  text(`Senstivity : ${round(SENSITVITY, 1)}`, 0, 150, width, 100);
  textSize(30);
  text("<--Press Enter to Start-->", 0, 250, width, 100);
  pop();

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
