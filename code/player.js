function Player(ctx, canvas) {
  this.canvas = canvas;
  this.posX = 600;
  this.posY = 0;
  this.width = 100;
  this.height = 170;
  this.life = 3;
  this.posY0= this.canvas.height*0.7;
  this.v = 9;
  this.bisbalImage = new Image();
  this.bisbalImage.src = "../images/bisbal11-pelino.png";
  this.ctx = ctx;
  this.posY = this.posY0;
  this.vy = 1;
  this.status = true
  this.setListeners();
}

Player.prototype.moveLeft = function() {
  if (this.posX > 10) {
    this.posX -= this.v;
  }
};

Player.prototype.moveRight = function() {
  if (this.posX < 1100) {
    this.posX += this.v;
  }
};

Player.prototype.jump = function() {

  var gravity = 0.3;

  if (this.posY >= this.posY0) {
    this.vy = 0.01;
    this.posY = this.posY0;
    this.status = true
  } else {
    this.vy += gravity;
    this.posY += this.vy;
    this.status = false
  }
  
};

Player.prototype.draw = function() {
  this.ctx.drawImage(
    this.bisbalImage,
    this.posX,
    this.posY,
    this.width,
    this.height
  );
  this.jump();
};

Player.prototype.setListeners = function() {

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        this.moveLeft();
        break;

      case 39:
        this.moveRight();
        break;

      case 38:
      if (this.status === true) {
        this.posY -= 5;
        this.vy -= 10;
      }

        break;
    }
  }.bind(this);
};

