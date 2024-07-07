const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = 'black';

class Player {
  constructor(position) {
    this.position = position;
    this.velocity = {x:10,y:2};
    this.height = 2;
    this.width = 1;
    this.birImage = new Image();
    this.birImage.src = 'bh.jpg'
  }
  draw() {


    ctx.fillStyle = 'red'
    ctx.beginPath();
    //ctx.drawImage(this.birImage,this.position.x,this.position.y,this.width,this.height);
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    ctx.fill();
  }
  update() {
    this.draw();
    this.position.x+=this.velocity.x;
    this.position.y+=this.velocity.y;
    if(this.position.y+this.height>canvas.height || this.position.y < 0 ) {
        this.velocity.y *= -1;
    }
    if(this.position.x+this.width>canvas.width || this.position.x < 0) {
      this.velocity.x *= -1;
      
    }
  }
}

const playerArray = [];
const numberOfPlayers = 1000;

for(let i=0;i<numberOfPlayers;i++) {
  playerArray.push(new Player({x:Math.random()*canvas.width,y:Math.random()*canvas.height}));
}

function drawing() {
  playerArray.forEach(player => {
    player.draw();
    player.update();
    });
}



const player = new Player({x:100,y:300});
const player2 = new Player({x:300,y:300}); // Changed y-position for player2
const player3 = new Player({x:500,y:300});

console.log(player);
console.log(player2);

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  player.update();
  player2.update();
  player3.update();
  drawing();
  requestAnimationFrame(animate);
}

animate();
