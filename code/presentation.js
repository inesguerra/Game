function Presentacion(ctx, canvas) {
    this.coverImage = new Image ();
    this.logo = new Image ()
    this.logo.src = '../images/logo.png'
    this.coverImage.src = '../images/cover.jpg';
    this.ctx = ctx;
    this.canvas = canvas;

    
}

Presentacion.prototype.draw = function(){
    
    this.coverImage.onload = function(){
        this.ctx.drawImage(this.coverImage, 0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.logo, 300, 250, 300, 170)
        this.ctx.font = "30px 'Sawarabi Gothic'" ;
        this.ctx.fillStyle = "white";
        this.ctx.fillText("BIENVENIDO ASPIRANTE",550,150)
        this.ctx.fillText("Saber canatar es importante ...",550,200)
        this.ctx.fillText("Pero ahora vamos a probar tus habilidades bailando",550,250)
        this.ctx.fillText("Baila (< >) y salta todo lo que puedas(^)",550,300)
        this.ctx.fillText("Recoger el máximo número de champús",550,350)
        this.ctx.fillText("Evita que Llongueras te corte el pelo",550,400)
        this.ctx.fillText("Y recuerda: NUNCA NUNCA NUNCA",550,450)
        this.ctx.fillText("DEJES DE BAILAR",550,500)
    }.bind(this)
    
}