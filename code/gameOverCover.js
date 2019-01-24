function GameOverCover(game){
    this.game = game;
    this.img = new Image()
    this.img.src = '../images/1195945214_0.jpg'

}

GameOverCover.prototype.draw = function() {
    console.log("a ines le van los bollos")
    // this.img.onload = function(){
        this.game.ctx.drawImage(this.img, 300, 250, 300, 170);
        this.game.ctx.font = "30px 'Sawarabi Gothic'" ;
        this.game.ctx.fillStyle = "black";
        this.game.ctx.fillText("TE HAS QUEDADO CALVITO",550,150)
        this.game.ctx.fillText("¡¡No pasa nada!! Da buena suerte",550,200)
        this.game.ctx.fillText("Pero la buena suerte ya no es la loteria",550,250)
        this.game.ctx.fillText("Es que te toque Alberto de TA",550,300)
    // }.bind(this)
   
}