var pantalla1
var pantalla2
var pantalla3

function setup() {
   pantalla1 = select("#Pantalla1");
   pantalla2 = select("#Pantalla2");
   pantalla3 = select("#Pantalla3");
   
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
console.log(this);
var recuadroPlaylist = select("#recuadroPlaylist")
recuadroPlaylist.attribute("src",this.attribute("src"))


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