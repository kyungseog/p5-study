let images = [];
let members = [];

function preload() {
  for (let i = 0; i < 10; i++) {
    let img = loadImage(memberImages[i]);
    images.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for(let i = 0; i < 10; i++) {
    members.push(new Member());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('white');
  for(let i = 0; i < members.length; i++) {
    push();
    texture(images[i]);
    members[i].createMember();
    pop();
    members[i].moveMember();
    members[i].connectMembers(members.slice(i));
  }
}
setInterval(() => display(), 10*1000);

function display() {
  noLoop();
  let selectedMeber = members[0];
  scale(2.0);
  selectedMeber;
  setTimeout(() => loop(), 5000);
  
}