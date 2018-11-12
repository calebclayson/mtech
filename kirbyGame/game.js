let canvas;
let renderingContext;
let width = 500;
let height = 400;
let frames = 0;
let myfill = "#8BE4FD";
let myhero;

(function main(){
    console.log("things");
    canvasSetup();
    document.getElementById('canvasBox').appendChild(canvas);
    myhero = new Kirby();
    loadGraphics();
    document.addEventListener('keydown', mykeypress);
    document.addEventListener('keyup', unpress);
})();

function Kirby() {
    this.x = 140;
    this.y = 100;
    this.height = 33;
    this.width = 27;
    this.frame = 0;
    this.animation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.velocity = 0;
    this.gravity = 0.21;
    this.stop = false;
    this.direction = '';
    this.velX = 0;
    this.maxSpeed = 6;
    this.friction = .93;
    this._jump = 5.8;
    this.jumpcount = 3;

    this.jump = function(){
        this.stop = false;
        if(this.jumpcount > 0) {
            this.velocity = -this._jump;
            this.jumpcount--;
        }
    }

    this.update = function() {
        let n = 10;
        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;

        

        if(!this.stop) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }

        if(this.y >= 350) {
            this.stop = true;
            this.land(350);
        }

        if(this.direction === 'left') {
            if(this.velX > -this.maxSpeed) {
                this.velX--;
            }
        }
        if(this.direction === 'right') {
            if(this.velX < this.maxSpeed) {
                this.velX++;
            }
        }
        this.velX *= this.friction;
        this.x += this.velX;
    }

    this.land = function(place) {
        this.y = place;
        this.jumpcount = 3;
        this.velocity = this._jump;
    }

    this.draw = function() {
        renderingContext.save();
        let n = this.animation[this.frame];
        kirby[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore();
    }
}

function canvasSetup() {
    canvas = document.createElement("canvas");
    canvas.style.border = "1px solid black";
    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    let myimg = new Image();
    myimg.src = "kirby.png";
    myimg.onload = function() {
        initSprites(this);
        renderingContext.fillStyle = myfill;
        gameLoop();
    }
}

function mykeypress(evt) {
    switch(evt.keyCode) {
        case 32:
            myhero.jump();
            break;
        case 37:
            myhero.direction = 'left';
            break;
        case 39:
            myhero.direction = 'right';
            break;
    }
}

function unpress(evt) {
    myhero.direction = "";
}

function gameLoop(){
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;
    myhero.update();
}

function render() {
    renderingContext.fillRect(0, 0, width, height);
    myhero.draw();
}