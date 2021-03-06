let canvas;
let renderingContext;
let width = 500;
let height = 400;
let frames = 0;
let myfill = "#8BE4FD";
let myhero;
let coinBag;
let brickYard;

(function main() {
    console.log("things");
    canvasSetup();
    document.getElementById('canvasBox').appendChild(canvas);
    myhero = new Kirby();
    coinBag = new CoinCollection();
    brickYard = new BrickCollection();
    loadGraphics();
    document.addEventListener('keydown', mykeypress);
    document.addEventListener('keyup', unpress);
    levelStart();
})();

function BrickCollection() {
    this.collection = [];
    this.add = function (brickX, brickY) {
        this.collection.push(new Brick(brickX, brickY));
    }

    this.draw = function () {
        for (let i = 0; i < this.collection.length; i++) {
            let myBrick = this.collection[i];
            myBrick.draw();
        }
    }

    this.update = function () {
        for (let i = 0; i < this.collection.length; i++) {
            let myBrick = this.collection[i];
            myBrick.checkHit();
            // myBrick.update();
        }
    }
}

function Brick(brickX, brickY) {
    this.x = brickX;
    this.y = brickY;
    this.width = 25;
    this.height = 28;

    this.checkHit = function() {
        let top = this.y;
        let bottom = this.y + this.height;
        let left = this.x;
        let right = this.x + this.width;

        let htop = myhero.y;
        let hbottom = myhero.y + myhero.height;
        let hleft = myhero.x;
        let hright = myhero.x + myhero.width;

        if (hleft < right && hright > left && htop < bottom && hbottom > top) {
            // console.log('hit detected');
            // return true;
            if(htop < top) {
                myhero.velocity *= -0.3;
                myhero.y = top - (myhero.height);
                myhero.stop = true;
                myhero.jumpcount = 3;
            }
        }
    }

    this.update = function () {
        
    }

    this.draw = function () {
        brick.draw(renderingContext, this.x, this.y);
        // pin.draw(renderContext, this.x, this.y);
    }
}

function CoinCollection() {
    this.collection = [];
    this.add = function (coinX, coinY) {
        this.collection.push(new Coin(coinX, coinY));
    }
    this.update = function () {
        for (let c = 0; c < this.collection.length; c++) {
            let activeCoin = this.collection[c];
            activeCoin.checkHit();
            if (activeCoin.checkHit()) {
                this.collection.splice(c, 1);
            }
        }
    }
    this.draw = function () {
        for (let i = 0; i < this.collection.length; i++) {
            let myCoin = this.collection[i];
            myCoin.draw();
        }
    }
}

function Coin(coinX, coinY) {
    this.x = coinX;
    this.y = coinY;
    this.width = 25;
    this.height = 25;

    this.checkHit = function () {
        let top = this.y;
        let bottom = this.y + this.height;
        let left = this.x;
        let right = this.x + this.width;

        let htop = myhero.y;
        let hbottom = myhero.y + myhero.height;
        let hleft = myhero.x;
        let hright = myhero.x + myhero.width;

        if (hleft < right && hright > left && htop < bottom && hbottom > top) {
            // console.log('hit detected');
            return true;
        }
    }

    this.draw = function () {
        coin.draw(renderingContext, this.x, this.y);
    }
}

function Kirby() {
    this.x = 140;
    this.y = 100;
    this.height = 26;
    this.width = 20;
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

    this.jump = function () {
        this.stop = false;
        if (this.jumpcount > 0) {
            this.velocity = -this._jump;
            this.jumpcount--;
        }
    }

    this.update = function () {
        let n = 10;
        this.frame += frames % n === 0 ? 1 : 0;
        this.frame %= this.animation.length;



        if (!this.stop) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        }

        if (this.y >= 350) {
            this.stop = true;
            this.land(350);
        }

        if (this.direction === 'left') {
            if (this.velX > -this.maxSpeed) {
                this.velX--;
            }
        }
        if (this.direction === 'right') {
            if (this.velX < this.maxSpeed) {
                this.velX++;
            }
        }
        this.velX *= this.friction;
        this.x += this.velX;

        if (this.x < 0) {
            this.x *= -this.friction;
        }
    }

    this.land = function (place) {
        this.y = place;
        this.jumpcount = 3;
        this.velocity = this._jump;
    }

    this.draw = function () {
        renderingContext.save();
        let n = this.animation[this.frame];
        kirby[n].draw(renderingContext, this.x, this.y);

        renderingContext.restore();
    }
}

function levelStart() {
    coinBag.add(200, 200);
    coinBag.add(100, 300);
    coinBag.add(150, 350);
    brickYard.add(250, 220);
    brickYard.add(10, 250);
    brickYard.add(120, 230);

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
    myimg.onload = function () {
        initSprites(this);
        renderingContext.fillStyle = myfill;
        gameLoop();
    }
}

function mykeypress(evt) {
    switch (evt.keyCode) {
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

function gameLoop() {
    update();
    render();
    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;
    coinBag.update();
    brickYard.update();
    myhero.update();
}

//draw everything in this method
function render() {
    renderingContext.fillRect(0, 0, width, height);
    coinBag.draw();
    brickYard.draw();
    myhero.draw();
}