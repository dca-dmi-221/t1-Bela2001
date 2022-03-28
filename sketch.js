let input;
let song;
let list = [];
let pl = new Player();
let ss = 0;

/*
1. Debe poder cargar archivos del disco duro.                           [✔]
2. Debe mostrar el archivo actual en reproducción.                      [ ]
3. Debe poder reproducir el sonido actual o uno disponible en lista.    [ ]
4. Debe poder pausar y detener.                                         [ ]
5. Debe poder adelantar o devolver la canción.                          [ ]
6. Debe poder definir el nivel de volumen.                              [ ]
7. Debe poder crear múltiples listas de reproducción.                   [ ]
8. Debe poder modificar la posición actual de reproducción.             [ ]
9. Debe mostrar el nivel de avance de la canción.                       [ ]
10. Debe mostrar el tiempo total de la canción.                         [ ]
11. Debe mostrar el nombre de las canciones de la lista de reproducción.[ ]
12. Debe poder cargar diversas listas de reproducción.                  [ ]
13. El tipo de interacción detallado depende de usted pero la           [ ]
usabilidad es un requisito obligatorio.
*/

function setup() {
  createCanvas(800, 600);
  input = createFileInput(addFile);
  input.position(0, 0);
}

function addFile(file){
  print(file);
  if (file.type === 'audio') {
    pl.addFile(file);
  }
  
}

function draw() {
  background(220);
  if(ss == 0){
    
  }else if(ss == 1){
    
  }else if(ss == 2){

  }
}
 
function mousePressed(){
  if(list.length>0){
    // list[0].play();
  }
}

function screenListAllSongs(){//SCREEN 0
  txt = "Canciones: \n";
  for(let i in pl.getSongs()){
    txt += pl.getSongs()[i].name + "\n";
  }

  text(txt,100, 100);
}

function screenNowPlaying(){//SCREEN 1
  let play = createButton("⏯", 100, 100, 100, 100);
}

function screenPlayList(){//SCREEN 2

}

