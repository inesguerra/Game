function Score (points, ctx, x, y) {
    this.ctx = ctx,
    this.points = points,
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "#f0f";
    this.posX = x,
    this.posY = y

}

Score.prototype.draw = function() {
    //this.ctx.fillText(Math.floor(this.points), this.posX, this.posY)

    var text = Math.floor(this.points)
    this.ctx.save();
    var blur = 2;
    //this.ctx.fillText(text, 100, 100)
    var width = this.ctx.measureText(text).width + blur;
    this.ctx.textBaseline = 'top'
    this.ctx.shadowColor = '#f0f'
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = blur;
    this.ctx.fillText(text, -width + 100, this.posY);
    this.ctx.restore();
}