var pantalla1
var pantalla2
var pantalla3
var contenedorBotones
var audiosrc
var audio
var nombreCancion
var cancionInput

var playlists = {
  playlistA: {
    audios:["Nieve.mp3", "LaPuertaEsElAmor.mp3"], 
    backgroundColor: "#A92883"
  },
  playlistElsa: {
    audios:["LetItGo.mp3", "MuchoMásAllá.mp3", "Sueltalo.mp3"],
    backgroundColor: "#022039"
  },
  playlistOlaf: {
    audios:["Muéstrate.mp3", "ShowYourself.mp3"],
    backgroundColor: "#3A3D3F"

  }

}

function setup() {
   pantalla1 = select("#Pantalla1");
   pantalla2 = select("#Pantalla2");
   pantalla3 = select("#Pantalla3");
   contenedorBotones = select("#contenedorBotones");
   audiosrc = select("#audiosrc");
   audio = select("#audio");
   nombreCancion = select("#nombreCancion");
  cancionInput = select("#file-input");
  cancionInput.changed(handleFile);
  
  var botonInicio = select("#botonInicio");
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
var audios = playlists[playlistName].audios
var backgroundColor = playlists[playlistName].backgroundColor

for (var i=0; i < audios.length; i++){
  var audio = audios[i] 
  crearAudioButton(audio, playlistName, backgroundColor);
 
}

}


function crearAudioButton(audioName, playlistName, backgroundColor) {
  var audioButton = createButton(audioName)
  audioButton.attribute("id","audioButton")
  audioButton.style("background-color", backgroundColor)
  audioButton.mousePressed(()=>{
    nombreCancion.html (audioName)
  audio.stop();
    audiosrc.attribute("src","")
    audiosrc.attribute("src",playlistName+"/" +audioName)
    audio.play();
  })
  contenedorBotones.child(audioButton);


}

function handleFile(event){
  console.log(event.target.files[0])
  nombreCancion.html (event.target.files[0].name)
  var fileurl = URL.createObjectURL(event.target.files[0])
  audio.stop();
  audiosrc.attribute("src", "")
  audiosrc.attribute("src", fileurl)
  audio.play();
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