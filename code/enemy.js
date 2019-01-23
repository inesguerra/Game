function Enemy (ctx, canvas){
    this.canvas = canvas;
    this.ctx = ctx;
    this.posX = 10;
    this.posY = 600;
    this.width = 50;
    this.height = 70;
    this.hairdresserImage = new Image ();
    this.hairdresserImage.src = '../images/Lluis-Llongueras.png';
    this.v = 3;
}

Enemy.prototype.draw = function (){
    this.ctx.drawImage(
        this.hairdresserImage,
        this.posX,
        this.posY,
        this.width,
        this.height,

    )
}

Enemy.prototype.move = function(){
    this.posX -= this.v;
    if (this.posX < 10) {
        this.v *= -1
      }
      else if(this.posX > 1180) {
       this.v *= -1;
      }

}