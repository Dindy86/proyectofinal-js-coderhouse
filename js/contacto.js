// Evento 
$("#formContact").submit(function (e) { 
  e.preventDefault();
  fetch("https://formsubmit.co/ajax/ing.pierredindy@gmail.com", {
    method: "POST",
    body: new FormData(e.target)
  })
  .then(res => res.ok ? res.json(): Promise.reject(res))
  .then(json => {
    $("#formContact-contenedorLoader").fadeIn(1000);
      $("#formContact-contenedorLoader").fadeOut(1000, function() {
      $("#formContact-notificacionEnvio").fadeIn(2000, function() {
        $("#formContact-notificacionEnvio").fadeOut(2000, function() {
        const formulario = document.getElementById("formContact");
        formulario.reset();
        })
      })
    });
  })
  .catch(err => {
    console.log(err);
  })
})