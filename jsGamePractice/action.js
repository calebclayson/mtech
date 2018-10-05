let canvas;
let renderingContext;
let width = 900;
let height = 500;
let myphantom;

function main() {
    windowSetup();
    canvasSetup();
    // other setup code here

    document.getElementById('gamebox').appendChild(canvas);
    myphantom = new Hero();
    loadGraphics();
}

function Hero() {
    this.x = 10;
    this.y = 120;

    this.draw = function() {
        renderingContext.save();

        phantom.draw(renderingContext, this.x, this.y);
        renderingContext.restore();
    }
}

function canvasSetup() {
    canvas = document.createElement('canvas');
    canvas.style.border = "2px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    let img = new Image();
    img.src = 'spriteSheet.png';
    img.onload = function(){
        initSprites(this);
        //gameLoop();
        myphantom.draw(renderingContext);
        // loadLevel();
    };
}

function windowSetup() {
    // TODO
}

function gameLoop() {

}