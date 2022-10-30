function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#00000');

  const mainGap = 20;

  stroke('red');
  rect(width / 4, mainGap, width / 2, height * 0.1 - mainGap);
  textSize(40);
  textAlign(CENTER, CENTER);
  noStroke();
  text('Conference Room Status', width / 4, mainGap, width / 2, height * 0.1 - mainGap);

  fill('blue');
  stroke('white');
  rect(10, height * 0.1 + mainGap, 10, height * 0.9 - mainGap, 3);

  stroke('gray');
  line(230, 180, 230, 800);
  
  //table 작성
  for (let i = 0; i < 11; i++) {
    //line
    stroke('gray');
    line(380 + i * 150, 180, 380 + i * 150, 800);

    //time
    textSize(30);
    textAlign(CENTER);
    text(8+i, 230 + i * 150, 150, 150, 50);
  }
  // 회의실 작성
  fill('red');
  stroke('white');
  rect(40, 200, 180, 90, 20);
  fill('white');
  textSize(20);
  textAlign(LEFT, TOP);
  text('I구역', 40 + 10, 200 + 10, 180 -20 , 90);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('A', 40 + 10, 200 + 10, 180 -20 , 90);
}

function draw() {

}
  