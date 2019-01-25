function GameOverCover(game){
    this.game = game;
    this.img = new Image()
    this.img.src = '../images/1195945214_0.jpg'

}

GameOverCover.prototype.draw = function() {
    console.log("a ines le van los bollos")
    // this.img.onload = function(){
        this.game.ctx.drawImage(this.img, 200, 160, 300, 250);
        this.game.ctx.font = "30px Arial" ;
        this.game.ctx.fillStyle = "black";
        this.game.ctx.fillText("¿Se te han caído esas melenas?",550,200)
        this.game.ctx.fillText(" No te preocupes, ahora tu calvita reparte suerte 🍀",550,250)
        this.game.ctx.fillText("Suerte para que ocurran cosas tan buenas",550,300)
        this.game.ctx.fillText("Como que te toque Alberto de TA! 👨🏼‍💻",550,350)
    // }.bind(this)
   
}