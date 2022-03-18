//Declaraciónes de variables del DOM
let formulario = document.getElementById("formularioSuscripcion");
let inputDatos = document.getElementById("emailFormulario");
let arrayFormulario = localStorage.getItem("arrayFormulario");

//Declaración de función
function notificacionSuscribirse() {
  $("#contenedorLoader").fadeIn(2000);
  $("#contenedorLoader").fadeOut(1000, function() {
    $("#notificacionEnvio").fadeIn(2000, function(){
      $("#notificacionEnvio").fadeOut(2000, function(){
      })
    })
  });
}

//Eventos
$("#formularioSuscripcion").submit(function (e) { 
  e.preventDefault();
  if(arrayFormulario) {
    arrayFormulario = localStorage.getItem("arrayFormulario").split(",");
    arrayFormulario.push(inputDatos.value);
    localStorage.setItem("arrayFormulario", arrayFormulario);
  } 
  else {
    arrayFormulario = [];
    arrayFormulario.push(inputDatos.value);
    localStorage.setItem("arrayFormulario", arrayFormulario); 
  }
  notificacionSuscribirse();
  formulario.reset();
});




