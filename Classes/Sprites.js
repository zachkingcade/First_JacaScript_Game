class Sprite {
    constructor(src = ""){
        this.images = [];
        this.images[0] = new images;
        this.images[0].src = src;
        this.frame = 0;
    }

    //adds an image to the list of images at the passed in index, if no index is
    //provided it appends to the end of the list;
    addImage(src = "",index = this.images.length){
        temp = new images;
        temp.src = src;
        this.images.splice(index,0,temp);
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
        let sprite = images[frame];
        if (this.images.length > 1){
            this.frame = (frame + 1) % this.images.length;
        }
        return sprite;
    }

    //resets the frame counter
    reset(){
        this.frame = 0;
    }
}