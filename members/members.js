let images = [];
let members = [];
const memberNo = 20;

function preload() {
  for (let i = 0; i < memberNo; i++) {
    let img = loadImage(memberImages[i]);
    images.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for(let i = 0; i < memberNo; i++) {
    members.push(new Member());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('white');
  const fc = frameCount % (30 * 30);

  if(fc >= 300) {
    for(let i = 0; i < members.length; i++) {
      push();
      texture(images[i]);
      members[i].createMember();
      pop();
      members[i].moveMember();
    }
    scale((fc - 300)/600);
    fill(50);
    rect(width/4 * -1, height/4 * -1, width/2, height/2);
  } else {
    for(let i = 0; i < members.length; i++) {
      push();
      texture(images[i]);
      members[i].createMember();
      pop();
      members[i].moveMember();
      members[i].connectMembers(members.slice(i));
    }
  }
}
