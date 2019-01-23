function Game() {
  this.canvas = document.querySelector("#canvasGame"); // para que lo coja de HTML
  this.ctx = this.canvas.getContext("2d"); // el contexto este en 2 dim
  this.arrObstacles = [];
  this.player = undefined;
  this.background = undefined;
  this.framesCounter = 0;
  this.score = 0;
}


//PLAYER
Game.prototype.initializePlayer = function() {
  this.player = new Player(this.ctx, this.canvas);
};

Game.prototype.drawPlayer = function() {
  this.player.draw();
};




//ENEMY
Game.prototype.initializeEnemy = function() {
  this.enemy = new Enemy(this.ctx, this.canvas);
};
Game.prototype.drawEnemy = function() {
  this.enemy.draw();
};





//OBSTACLE
//Obstaculos

Game.prototype.comprobationObstacle = function(temporalObstacle,z){
  
  return this.arrObstacles.some(function(obstacle){ 
    
    if(temporalObstacle.posX  > obstacle.posX + obstacle.width && temporalObstacle.posX + temporalObstacle.width < obstacle.posX) {
      return false
      
    }else{

      // if(z===1){
      //   temporalObstacle.posX = Math.floor(Math.random()*(400 - 50) + 50);
      //   this.comprobationObstacle(temporalObstacle,1)
      // }
      // if(z===2){
      //   temporalObstacle.posX = Math.floor(Math.random()*(800 - 400)+ 400);
      //   this.comprobationObstacle(temporalObstacle,2)
      // }
      // if(z===3){
      //   temporalObstacle.posX = Math.floor(Math.random()*(1100 - 800) + 800);
      //   this.comprobationObstacle(temporalObstacle,3)}
      // if(z===4){
      //   temporalObstacle.posX = Math.floor(Math.random()*1100);
      //   this.comprobationObstacle(temporalObstacle,4)
      // }
    }
      
  }.bind(this)) 
  
}
Game.prototype.createObstacle = function() {
  

  var temporalObstacle = new Obstacle (this.ctx, this.canvas, Math.floor(Math.random()*(400 - 50) + 50) ,'../images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle,1)) {
    this.arrObstacles.push(temporalObstacle)
  }


  var temporalObstacle2 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(800 - 400)+ 400), '../images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle2,2)) {
    this.arrObstacles.push(temporalObstacle2)
  }


  var temporalObstacle3 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(1100 - 800) + 800), '../images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle3,3)) {
    this.arrObstacles.push(temporalObstacle3)
  }
  
  
};




Game.prototype.createObstacle2 = function() {
 
  var temporalObstacle4 = new Obstacle (this.ctx, this.canvas, Math.floor(Math.random()*(400 - 50) + 50) ,'../images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle4,1)) {
    this.arrObstacles.push(temporalObstacle4)
  }


  var temporalObstacle5 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(800 - 400)+ 400), '../images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle5,2)) {
    this.arrObstacles.push(temporalObstacle5)
  }


  var temporalObstacle6 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(1100 - 800) + 800), '../images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle6,3)) {
    this.arrObstacles.push(temporalObstacle6)
  }
};

Game.prototype.createObstacle3 = function() {
  var temporalObstacle7 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*1100), '../images/mascarilla.png', "mascarilla")
  if(!this.comprobationObstacle(temporalObstacle7,4)) {
    this.arrObstacles.push(temporalObstacle7)
  }
  
};
//Generar obstaculos


Game.prototype.drawObstacle = function() {
  this.arrObstacles.forEach(function(obstacle) {
    obstacle.fall();
  });
};

Game.prototype.clearObstacles = function (){
  this.arrObstacles = this.arrObstacles.filter(function(obstacle){
    return obstacle.posY <= 700;
  })
}


//COLLISION
Game.prototype.collision = function() {

this.arrObstacles.forEach(function(obstacle, i){

if(((this.player.posX + this.player.width) >= obstacle.posX &&
    this.player.posX < (obstacle.posX + obstacle.width) &&
    this.player.posY + this.player.height >= obstacle.posY &&
    this.player.posY < (obstacle.posY + obstacle.height)) 
  ){

    if (obstacle.type === "champu") {
      this.score += 10;
    }
    if (obstacle.type === "tijera") {
      this.score -= 10;
    }
    if (obstacle.type === "mascarilla") {
      this.life += 1;
    }

     this.arrObstacles.splice(i,1)
     console.log("ha tocado!")
    // return obstacle.collised() == true
  }}.bind(this))
 
}
 
//BACKGROUND
Game.prototype.initializeBackground = function() {
    this.background = new Background(this.ctx, this.canvas);
  };

Game.prototype.drawBackground = function() {
    this.background.draw();
};

// SCORE
Game.prototype.drawScore = function () {
  this.score.update(this.points, this.ctx)
}

Game.prototype.initial

//DRAW; REPEAT; START
Game.prototype.drawAll = function() {
  this.drawScore();
  this.drawBackground();
  this.drawEnemy();
  this.drawObstacle();
  this.drawPlayer();
  this.clearObstacles();
};

Game.prototype.repeat = function() {
  IntervalId = setInterval(
    function() {
      this.ctx.clearRect(0, 0, 1200, 700);

      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }

      if (this.framesCounter % 400 === 0) {
        this.createObstacle();
      } 

      if (this.framesCounter % 600 === 0){
        this.createObstacle2();
      }

      if (this.framesCounter % 1000 === 0){
        this.createObstacle3();
      }

    
      this.drawAll();
      this.enemy.move();
      this.collision();
    }.bind(this),
    1000 / 60
  );
};

Game.prototype.start = function() {
  this.initializeEnemy();
  this.initializePlayer();
  this.initializeBackground();
  this.createObstacle();
  this.repeat();
};


// colision: https://www.youtube.com/watch?v=eqfLnF5UvyA&list=PLN9W6BC54TJLlH57qvG2aN9F99xaAk6Df&index=34
