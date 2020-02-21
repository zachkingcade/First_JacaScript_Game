class Sprite {
    constructor(src = null){
        this.images = [];
        this.frame = 0.0;
        this.allReady = false;
        this.loadNum = 0;
        this.frameTickChange = 1.0;

        //if you passed in an inital image
        if(src){
            this.images[0] = new Image;
            this.images[0].src = src;
            this._recheckReady()
        }
    }

    //adds an image to the list of images at the passed in index, if no index is
    //provided it appends to the end of the list;
    addImage(src = "",index = this.images.length){
        let temp = new Image;
        temp.src = src;
        this.images.splice(index,0,temp);
        this._recheckReady()
    }

    //removes an image from the list of images at the passed in index, if no
    //index is provided it removes the last item in the list;
    removeImage(index = this.images.length - 1){
        this.images.splice(index,1);
    }

    //checks if there is more then one image (for animation),if there is it 
    //returns the current frame and sets up for the next one, else it returns
    //single image
    draw(){
        let sprite = this.images[Math.trunc(this.frame)];
        if (this.images.length > 1){
            this.frame = (this.frame + this.frameTickChange) % this.images.length;
            console.log(this.frame);
        }
        return sprite;
    }

    //resets the frame counter
    reset(){
        this.frame = 0;
    }

    //imports multiple images to add to the sprite set
    import(src,type,num = 1){
        for (let i = 0; i < num; i++){
            this.addImage(src + i + type);
        }
        this._recheckReady()
    }

    //Goes thru all the images and makes sure they are loaded and ready
    //to be drawn
    _recheckReady(){
        //keeps track of how many of the images is loaded
        this.loadNum = 0;
        this.allReady = false;

        for (let i = 0; i < this.images.length; i++){
            if(this.images[i].complete){this.loadNum++}
        }
        if(this.loadNum >= this.images.length){this.allReady = true}
    }

    //forces a recheck of the images that are currently loaded
    //and return waether they are all loaded or not
    ready(){
        this._recheckReady()
        return this.allReady;
    }

}//---end of Sprite---