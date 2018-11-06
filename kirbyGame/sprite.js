let kirby;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function(renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
}

function initSprites(img) {
    kirby = [
        new Sprite(img, 5, 63, 27, 33),
        new Sprite(img, 34, 63, 27, 33),
        new Sprite(img, 63, 63, 27, 33),
        new Sprite(img, 92, 63, 27, 33),
        new Sprite(img, 121, 63, 27, 33),
        new Sprite(img, 150, 63, 27, 33),
        new Sprite(img, 179, 63, 27, 33),
        new Sprite(img, 208, 63, 27, 33),
        new Sprite(img, 237, 63, 27, 33),
        new Sprite(img, 266, 63, 27, 33),
    ];
}