var pantalla1
var pantalla2
var pantalla3
var contenedorBotones
var audiosrc
var audio

var playlists = {
  playlistA: ["Nieve.mp3", "LaPuertaEsElAmor.mp3"],
  playlistElsa: ["LetItGo.mp3", "MuchoMásAllá.mp3", "Sueltalo.mp3"],
  playlistOlaf: ["Muéstrate.mp3", "ShowYourself.mp3"]


}

function setup() {
   pantalla1 = select("#Pantalla1");
   pantalla2 = select("#Pantalla2");
   pantalla3 = select("#Pantalla3");
   contenedorBotones = select("#contenedorBotones");
   audiosrc = select("#audiosrc");
   audio = select("#audio");

  
  var botonInicio = select("#botonInicio");
  var fileinput = createFileInput(handleFile);
  botonInicio.mousePressed(botonInicioPressed)

  var botonRegresar = select("#botonRegresar");
  
  botonRegresar.mousePressed(botonRegresarPressed)

  var botonesPlaylists = selectAll(".Recuadros");

  for (var i=0; i < botonesPlaylists.length; i++){
    var botonPlaylist = botonesPlaylists[i]
    botonPlaylist.mousePressed(botonesRecuadrosPressed);
    
  }

}

function botonesRecuadrosPressed(){

pantalla2.hide();
pantalla3.show();


var recuadroPlaylist = select("#recuadroPlaylist")
recuadroPlaylist.attribute("src",this.attribute("src"))



var botones = selectAll("#audioButton")
for (var i=0; i < botones.length; i++){
  var boton = botones[i] 
  boton.remove();
 
}

var playlistName = this.attribute("id")
var audios = playlists[playlistName]

for (var i=0; i < audios.length; i++){
  var audio = audios[i] 
  crearAudioButton(audio, playlistName);
 
}

}


function crearAudioButton(audioName, playlistName) {
  var audioButton = createButton(audioName)
  audioButton.attribute("id","audioButton")
  audioButton.mousePressed(()=>{
  audio.stop();
    audiosrc.attribute("src",playlistName+"/" +audioName)
    audio.play();
  })
  contenedorBotones.child(audioButton);


}

function handleFile(file){

console.log(file);
}


function draw() {
 
}

function botonInicioPressed(){
  pantalla1.hide();
  pantalla2.show();
 
}

function botonRegresarPressed(){
  pantalla1.hide();
  pantalla2.show();
  pantalla3.hide();
 
}