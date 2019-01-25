function Heart (ctx, distance){
    this.heartImage = new Image();
    this.heartImage.src = '../images/corazon.png';
    this.ctx = ctx;
    this.distance = distance
}

Heart.prototype.draw = function() {
    this.ctx.drawImage(this.heartImage, this.distance, 0, 50,50)
    this.ctx.font = "30px Arial" ;
    this.ctx.fillStyle = "white";
    this.ctx.fillText("PTS",0,73,60,60)
}