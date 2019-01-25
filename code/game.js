function Game() {
  this.canvas = document.querySelector("#canvasGame"); // para que lo coja de HTML
  this.ctx = this.canvas.getContext("2d"); // el contexto este en 2 dim
  this.arrObstacles = [];
  this.player = undefined;
  this.background = undefined;
  this.framesCounter = 0;
  this.score = undefined;
  this.scoreLife = undefined;
  this.intervalId = undefined;
  this.points = 30;
  this.life = 3;
  this.enemy = undefined;
  this.startState = 0;
  this.keySpace = true;
  this.presentation = undefined;
  this.gameOverCover = new GameOverCover (this)
  this.hearts = [];
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
      
    }
      
  }.bind(this)) 
  
}
Game.prototype.createObstacle = function() {
  

  var temporalObstacle = new Obstacle (this.ctx, this.canvas, Math.floor(Math.random()*(400 - 50) + 50) ,'./images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle,1)) {
    this.arrObstacles.push(temporalObstacle)
  }


  var temporalObstacle2 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(800 - 400)+ 400), './images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle2,2)) {
    this.arrObstacles.push(temporalObstacle2)
  }


  var temporalObstacle3 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(1100 - 800) + 800), './images/champu1.png', "champu")
  if(!this.comprobationObstacle(temporalObstacle3,3)) {
    this.arrObstacles.push(temporalObstacle3)
  }
  
  
};




Game.prototype.createObstacle2 = function() {
 
  var temporalObstacle4 = new Obstacle (this.ctx, this.canvas, Math.floor(Math.random()*(400 - 50) + 50) ,'./images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle4,1)) {
    this.arrObstacles.push(temporalObstacle4)
  }


  var temporalObstacle5 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(800 - 400)+ 400), './images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle5,2)) {
    this.arrObstacles.push(temporalObstacle5)
  }


  var temporalObstacle6 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*(1100 - 800) + 800), './images/tijeras1.png', "tijera")
  if(!this.comprobationObstacle(temporalObstacle6,3)) {
    this.arrObstacles.push(temporalObstacle6)
  }
};

Game.prototype.createObstacle3 = function() {
  var temporalObstacle7 = new Obstacle(this.ctx, this.canvas, Math.floor(Math.random()*1100), './images/mascarilla.png', "mascarilla")
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
      this.score.points += 10;
    }
    if (obstacle.type === "tijera") {
      this.score.points -= 10;
    }
    if (obstacle.type === "mascarilla") {
      console.log(this.hearts.length)
      if (this.scoreLife.points < 3) {
        switch (this.hearts.length) {
          case 1:
          this.hearts.push(new Heart(this.ctx, 80))
          this.scoreLife.points += 1;
          break;
          case 2:
          this.hearts.push(new Heart(this.ctx, 140))
          this.scoreLife.points += 1;
          break;
        }
        
      }
    } 

     this.arrObstacles.splice(i,1)
  }}.bind(this))
 
}

Game.prototype.collisionEnemy = function() {

  var hit = false

  if((this.player.posX + (this.player.width/2)) == (this.enemy.posX + (this.enemy.width/2)) &&
      this.player.posY + this.player.height >= this.enemy.posY &&
      this.player.posY < (this.enemy.posY + this.enemy.height) 
    ){
        hit = true
      }

      if (hit === true) {
        this.scoreLife.points -= 1;
        this.hearts.splice(-1,1)
      }


    }

    //HEARTS

    // Game.prototype.initializeHearts = function() {
    //   this.hearts = new Hearts(this.ctx, this.canvas);
    // };
  
    // Game.prototype.drawHearts = function() {
    //   this.hearts.draw();
    // }
  
//BACKGROUND
Game.prototype.initializeBackground = function() {
    this.background = new Background(this.ctx, this.canvas);
  };

  Game.prototype.initializeLife = function() {
    this.hearts.push(new Heart(this.ctx, 20), new Heart(this.ctx, 80), new Heart(this.ctx, 140))
  };

Game.prototype.drawBackground = function() {
    this.background.draw();
};

//COVER
  Game.prototype.initializePresentation = function(){
    this.presentation = new Presentacion (this.ctx, this.canvas);
  }
Game.prototype.drawPresentation = function() {
  this.presentation.draw();
}


// SCORE
Game.prototype.drawScore = function() {

  // this.scoreLife.draw()
}

Game.prototype.initializeScore = function() {
  this.score = new Score (this.points, this.ctx, 50, 50)
  this.scoreLife = new Score (this.life, this.ctx, 50, 100)
}

//DRAW; REPEAT; START
Game.prototype.drawAll = function() {
 
  this.drawBackground();
  // this.drawHearts();
  this.drawEnemy();
  this.drawObstacle();
  this.drawPlayer();
  this.score.draw()
  // this.drawScore();
  this.hearts.forEach(function(heart){
    heart.draw()
  })
  this.clearObstacles();
};

Game.prototype.repeat = function() {
  this.intervalId = setInterval(
    function() {
      this.clearScreen();

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
      this.collisionEnemy();
      if (this.points === 0 || this.scoreLife.points === 0){
        this.gameOver();
      }
    }.bind(this),
    1000 / 60
  );
};

Game.prototype.start = function() {
  this.initializeLife();
  this.initializeEnemy();
  this.initializePlayer();
  // this.initializeHearts();
  this.initializeScore();
  this.initializeBackground();
  this.createObstacle();
  this.repeat();
  this.shootSound = new MySound("./music/David Bisbal - Ave María (Official Music Video).mp3");  
  this.shootSound.play();

};

Game.prototype.gameOver = function() {
  
  this.stop();
  this.clearScreen();
  this.drawGameOverCover();
}

Game.prototype.stop = function() {
  clearInterval(this.intervalId)

}
Game.prototype.clearScreen = function(){
  this.ctx.clearRect(0, 0, 1200, 700);
}
Game.prototype.drawGameOverCover = function(){
  this.gameOverCover.draw()
}

Game.prototype.startGame = function(){
  
  this.initializePresentation()
  this.ctx.clearRect(0, 0, 1200, 700)
  this.drawPresentation()
  window.onkeydown = function(e) {
    
    if (e.keyCode === 32 && this.keySpace){
      this.start();
      this.startState = 1;
      this.keySpace = false;
    }
  }.bind(this)
}
