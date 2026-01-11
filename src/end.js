const end = () => {
  frameRate(10);
  background(220);
  textSize(50);
  fill(1);
  text("Game Over", 0, 30, 500, 200);
  textSize(20);

  text("Please Help To Design this page", 0, 100, 1000, 100);

  push();
  textAlign("center");
  textSize(30);
  text(`Score : ${Math.round(GAME_OBJECTS.score)}`, 0, 150, width, 100);
  textSize(30);
  text("<--Press Enter to Start-->", 0, 240, width, 100);
  pop();
  if (keyIsDown(ENTER)) {
    STATUS = "start";
  }
};
