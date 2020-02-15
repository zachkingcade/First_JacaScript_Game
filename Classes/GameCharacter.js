class Gamecharacter {
    constructor(x, y, width, height, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.sprites = {};
        this.sounds = {};
    }

    moveHor() {
        this.x += this.xSpeed;
    }

    moveVer() {
        this.y += this.ySpeed;
    }
}