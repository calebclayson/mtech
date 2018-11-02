let canvas;
let renderingContext;
let width = 500;
let height = 400;
let frames = 0;
let myhero;

(function main(){
    console.log("things");
    canvasSetup();
    loadGraphics();
})();

function canvasSetup() {
    canvas.document.createElement("canvas");
    canvas.style.border = "1px solid black";
    canvas.width = width;
    canvas.height = height;
}

function loadGraphics() {
    let myimg = new Image();
    myimg.src = "kirby.png";
    myimg.onload = function() {
        initSprites(this);
    }
}