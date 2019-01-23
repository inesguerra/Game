function Obstacle (ctx, canvas, posX, image, type) {
    this.posX = posX,
    this.posY = 0,
    this.width = 30,
    this.height = 50,
    this.panteneImage = new Image ();
    this.panteneImage.src = image;
    this.canvas = canvas;
    this.ctx = ctx;
    this.type = type;
    this.v = Math.floor(Math.random()*3+1);
}


Obstacle.prototype.draw= function() {
    // var width = posX;
    // if(this.posX == width){
        
    // }
    this.ctx.drawImage(this.panteneImage, this.posX,  this.posY,  this.width,  this.height)       
}


Obstacle.prototype.fall = function() {
    this.posY +=1*this.v
    this.draw();
}

Obstacle.prototype.collised = function(){
   
}

// Obstacle.prototype.position = function() {
//     if (this.posX <= 400){ 
//         push(range1)
//         } else if(this.posX > 400 && this.posX <= 800) {
//         push(range2) 
//         }else if(this.posX > 800 && this.posX <= 1200){
//         push(range3)
//         }
// }
