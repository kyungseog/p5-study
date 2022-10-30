class Member {
  constructor() {
    this.x = random(width/2 * -1, width/2);
    this.y = random(height/2 * -1, height/2);
    this.r = random(30,60);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createMember() {
    noStroke();
    circle(this.x,this.y,this.r);
  }

  moveMember() {
    if(this.x < width/2 * -1 || this.x > width/2)
      this.xSpeed*=-1;
    if(this.y < height/2 * -1  || this.y > height/2)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  connectMembers(members) {
    members.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis < 130) {
        stroke('gray');
        line(this.x,this.y,element.x,element.y);
      }
    });
  } 
}