let auxSong;
let input;//file selector
// let nowPlaying;
let pl = new Player();//music player
let ss = 1;//screen showing
let volumeSlider ;


/*
1. Debe poder cargar archivos del disco duro.                           [✔]
2. Debe mostrar el archivo actual en reproducción.                      [✔]
3. Debe poder reproducir el sonido actual o uno disponible en lista.    [ ]
4. Debe poder pausar y detener.                                         [✔]
5. Debe poder adelantar o devolver la canción.                          [✔]
6. Debe poder definir el nivel de volumen.                              [✔]
7. Debe poder crear múltiples listas de reproducción.                   [ ]
8. Debe poder modificar la posición actual de reproducción.             [ ]
9. Debe mostrar el nivel de avance de la canción.                       [ ]
10. Debe mostrar el tiempo total de la canción.                         [ ]
11. Debe mostrar el nombre de las canciones de la lista de reproducción.[ ]
12. Debe poder cargar diversas listas de reproducción.                  [ ]
13. El tipo de interacción detallado depende de usted pero la           [ ]
usabilidad es un requisito obligatorio.
*/
function setupSongs(){
  let song1 = loadSound('songfolder/fuga.mp3');
  let song2 = loadSound('songfolder/Siento.mp3');
  let song3 = loadSound('songfolder/Die4You.mp3');

  pl.addSong(song1);
  pl.addSong(song2);
  pl.addSong(song3);

  pl.addFile("La Fuga");
  pl.addFile("Hoy lo siento");
  pl.addFile("Die for you");
}

function setup() {
  createCanvas(700, 600);
  input = createFileInput(addFile);
  input.position(100, 50);
  setupSongs();
  volumeSlider = createSlider(0, 100, 80);
  volumeSlider.style("transform", "rotate(-90deg)");
  volumeSlider.style("width", "100px");
  volumeSlider.position(1000,1000);
}

function addFile(file){
  print(file);
  if (file.type === 'audio') {
    pl.addFile(file);
  }
  
}

function draw() {
  if(ss == 0){
    screenListAllSongs();
  }else if(ss == 1){
    screenNowPlaying();
  }else if(ss == 2){
    screenPlayList();
  }
}

 
function mousePressed(){
  if(ss == 1){
    pl.listen();
  }
}

function screenListAllSongs(){//SCREEN 0
  background(220);
  textSize(20);
  let txt = "Todas las canciones: \n";
  for(let i in pl.getFiles()){
    txt += (+i+1) + ". " + pl.getFiles()[i]+ "\n";
  }

  text(txt,100, 100);
}

function screenNowPlaying(){//SCREEN 1
  background(220);
  textAlign(CENTER);

  //SONG NAME
  textSize(50);
  text(pl.getFiles()[pl.getNowPlaying()], 350, 250);

  //PLAY BUTTON
  if(!pl.getIsPlaying()){
    text("⏸", 350, 400);
  }else{
    text("▶", 350, 400);
  }
  
  //BACK AND FORWARD BUTTON
  textSize(50);
  text("⏮", 250, 400);
  text("⏭", 450, 400);

  //VOLUME SLIDER
  textSize(30);
  if(volumeSlider.value() == 0){
    text("🔈",605,470);
  }else if(volumeSlider.value()>0 && volumeSlider.value() <50){
    text("🔉",605,470);
  }else{
    text("🔊",605,470);
  }
  pl.setVolume(volumeSlider.value());
  volumeSlider.position(550,370);
  if (volumeSlider.isChanged) {
    pl.getSongs()[pl.getNowPlaying].setVolume(volumeSlider.val)
  }

  //DURATION
  
}

function screenPlayList(){//SCREEN 2
  background(220);

}

