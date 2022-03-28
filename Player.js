class Player{
    constructor(){
        this.songs = [];
    }


    getSongs(){
        return this.songs;
    }

    setSongs(songs){
        this.songs = songs;
    }

    addFile(file){
        this.songs.push(file);
        console.log(this.songs)
    }

    play(){

    }

    pause(){

    }

    skip(){

    }

    goBack(){

    }


}