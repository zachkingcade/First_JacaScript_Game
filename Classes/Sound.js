//----------Handles Sounds----------
function sound(src) {
    //-----Properties-----
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    //-------functions-------

    //plays sound if it is not already playing
    this.play = function () {
        if(this.playing() == false){
            this.sound.play();
        }
    }

    //stops the sound from continuing to play if it is playing
    this.stop = function () {
        this.sound.pause();
    }

    //returns true if the sound is currently playing otherwise it returns false
    this.playing = function (){
        return (!this.sound.paused);
    }
}