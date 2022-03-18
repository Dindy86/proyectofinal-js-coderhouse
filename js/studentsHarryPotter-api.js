//Declaración de variables
let src ="";
let nombreDelDirector = "";
const imageDirector = document.getElementById("imageDirector");
const nombreDirector = document.getElementById("nombreDirector");

//Declaraciones de funciones
function simuladorConsultaApiProductos () {
  const URL = "https://hp-api.herokuapp.com/api/characters/students";
  $.ajax({
    type: "GET",
    url: URL,
    success: function (respuesta) {
      if(respuesta[0].name =="Harry Potter") {
        src = respuesta[0].image;
        nombreDelDirector = respuesta[0].name;
        imageDirector.setAttribute("src",src);
        nombreDirector.textContent = nombreDelDirector;
      }
    }
  });
}

//Invocación de función
simuladorConsultaApiProductos();