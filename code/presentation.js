function Presentacion(ctx, canvas) {
    this.coverImage = new Image ();
    this.logo = new Image ()
    this.logo.src = '../images/logo.png'
    this.coverImage.src = '../images/presentation.jpg';
    this.ctx = ctx;
    this.canvas = canvas;

    
}

Presentacion.prototype.draw = function(){
    
    this.coverImage.onload = function(){
        this.ctx.drawImage(this.coverImage, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.logo, 300, 250, 300, 170)
        this.ctx.font = "30px Arial" ;
        this.ctx.fillStyle = "white";
        this.ctx.fillText("BIENVENIDO ASPIRANTE 🤗",550,150)
        this.ctx.fillText("Saber cantar es importante ...",550,200)
        this.ctx.fillText("Pero ahora vamos a probar como bailas",550,250)
        this.ctx.fillText("Baila ◀️ ▶️ y salta todo lo que puedas 🔼",550,300)
        this.ctx.fillText("Los champús te dan puntos🚿",550,350)
        this.ctx.fillText("Las mascarillas te dan vida🚿",550,400)
        this.ctx.fillText("Evita Llongueras te corte el pelo ✂️",550,450)
        this.ctx.fillText("⚠️ Y recuerda: NUNCA NUNCA NUNCA",550,500)
        this.ctx.fillText("DEJES DE BAILAR 💃🏼",550,550)
    }.bind(this)
    
}