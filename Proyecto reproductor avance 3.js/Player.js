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
        this.songs[this.nowPlaying].setVolume(vol/400)
    }

    getCurrentTime(){
        let time = this.songs[this.nowPlaying].currentTime();
        return time;
    }

    getSongDuration(){
        return this.songs[this.nowPlaying].duration();
    }

    getFinalDuration(sd){
        let duration = sd;
        let minutes = Math.floor(duration / 60);
        let seconds = duration - minutes * 60;

        seconds+='';
        let aux = seconds.split('');
        let output = '';
        for(let i in aux){
            if(aux[i] == '.'){
                break;
            }else{
                if(seconds<10 ){
                    output+='0';
                }
                output+=aux[i];
            }
        }

       return ( minutes+':'+output);
    }

    modifySong(time){
        if(this.allLoaded()){
            this.songs[this.nowPlaying].jump(time);
        }
    }

    allLoaded(){
        let aux = true
        for(let i in this.songs){
            if(!this.songs[i].isLoaded()){
                aux = false;
            }
        }
        return aux;
    }

}