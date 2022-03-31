class Player{
    constructor(){
        this.files = [];
        this.songs = [];
        this.playlists = [];
        this.isPlaying = true;
        this.nowPlaying = 0;
    }


    getSongs(){
        return this.songs;
    }

    getPlaylists(){
        return this.playlists;
    }

    getNowPlaying(){
        return this.nowPlaying;
    }

    getFiles(){
        return this.files;
    }

    getIsPlaying(){
        return this.isPlaying;
    }


    setPlaylists(playlists){
        this.playlists = playlists;
    }

    setSongs(songs){
        this.songs = songs;
    }

    

    listen(){
        console.log(this.songs[this.nowPlaying].currentTime());
        if(dist(mouseX,mouseY,350,400)<30){// play or pause
            if(this.isPlaying){
                this.play();
            }else{
                this.pause();
            }
        }else if(dist(mouseX,mouseY,250,400)<30){// Go back
            this.goBack();
        }else if(dist(mouseX,mouseY,450,400)<30){// Go next
            this.skip();
        }
    }

    addFile(file){
        this.files.push(file);
        // this.songs.push(loadSound(file.data));
    }

    addSong(file){
        this.songs.push(file);
    }

    play(){
        this.songs[this.nowPlaying].play();
        console.log('play');
        this.isPlaying = false;
    }

    pause(){
        this.songs[this.nowPlaying].pause();
        console.log('pause');
        this.isPlaying = true;
    }

    skip(){
        this.songs[this.nowPlaying].stop();
        if(this.nowPlaying == this.songs.length-1){
            this.nowPlaying = 0;
            this.isPlaying = true;
            this.play();
        }else{
            this.nowPlaying++;
            this.isPlaying = true;
            this.play();
        }
    }

    goBack(){
        this.songs[this.nowPlaying].stop();
        if(this.nowPlaying == 0){
            this.nowPlaying = this.songs.length-1;
            this.isPlaying = true;
            this.play();
        }else{
            this.nowPlaying--;
            this.isPlaying = true;
            this.play();
        }
    }

    setVolume(vol){
        this.songs[this.nowPlaying].setVolume(vol/100)
    }

    getCurrentTime(){
        let time = this.songs[this.nowPlaying].currentTime();
        return time;
    }

    getSongDuration(){
        return this.songs[this.nowPlaying].duration();
    }
}