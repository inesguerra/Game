function Background(ctx, canvas) {

  this.stageImage = new Image();
  this.stageImage.src = '../images/plato_ot.jpg';
  this.posX = 0;
  this.posY = 0;
  this.ctx = ctx;
  this.canvas = canvas;
}

Background.prototype.draw = function() {
  this.ctx.drawImage(this.stageImage, this.posX, this.posY, this.canvas.width, this.canvas.height);
  
};
