window.onload = function(){
    var canvas = document.querySelector("#canvasGame") // para que lo coja de HTML
    var ctx = canvas.getContext('2d') // el contexto este en 2 dim

    function drawPlayer() {
        var bisbalImage = new Image ();
        bisbalImage.src = 'images/persona.png';
        ctx.drawImage(bisbalImage, bisbal.posX, bisbal.posY, bisbal.width, bisbal.height) // poscion x, y width, heigh   
    }

    function drawBackground(){

    }

    function drawShampoos() {
        var panteneImage = new Image ();
        panteneImage.src = 'images/rectangulo.png'
        ctx.drawImage(panteneImage, pantene.posX, pantene.posY, pantene.width, pantene.height)

    }

    function drawHairdresser() {

    }
    


    function drawAll() { //esta funcion llama a las demas funciones
        IntervalId = setInterval(function() { // cada X tiempo se realizan los mecanismos que haya dentro de la funcion. setInterval es de JS. dos parametros: setInterval(function{}, tiempo en segundos x1000/60 (por el ojito humano))
            ctx.clearRect(0, 0, 1200, 700) // todo lo que vaya precedido por ctx se refiere al canvas. clearRect es funcion de canvas. Hay que concretar las medidas que quieres que borre, porque ctx usa como referencia el canvas
            drawPlayer (); 
            drawShampoos ();
            drawHairdresser ();
        },1000/60)

    }

    drawAll();

    document.onkeydown = function(e){
        switch (e.keyCode){
            case 37:
            bisbal.moveLeft();
            break;

            case 39:
            bisbal.moveRight();
            break;

            case 38:
            bisbal.jump();
            break;
        }

    }







}

// colision: https://www.youtube.com/watch?v=eqfLnF5UvyA&list=PLN9W6BC54TJLlH57qvG2aN9F99xaAk6Df&index=34