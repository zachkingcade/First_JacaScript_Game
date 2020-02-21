class Gamecharacter {
    constructor(x, y, width, height, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.states = {};
        this.stateNum = 0;
    }

    moveHor() {
        this.x += this.states[this.stateNum].xSpeed;
    }

    moveVer() {
        this.y += this.states[this.stateNum].ySpeed;
    }

    State = class{
        constructor(xs,ys){
            this.xSpeed = xs;
            this.ySpeed = ys;
            this.sprites = [];
            this.sounds = [];
        }
    }

}