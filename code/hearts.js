function Hearts (ctx, canvas){
    this.heartsImage = new Image();
    this.heartsImage.src = '../images/corazon.png';
    this.ctx = ctx;
    this.canvas = canvas;
}

Hearts.prototype.draw = function() {
    this.ctx.drawImage(this.heartsImage, 0, 0, 50,50)
    this.ctx.drawImage(this.heartsImage, 60, 0, 50,50)
    this.ctx.drawImage(this.heartsImage, 130, 0, 50,50)

}