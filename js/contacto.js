
$("#formContact").submit(function (e) { 
  //e.preventDefault();
  // $("#contenedorLoader").fadeIn(2000);
  // $("#contenedorLoader").fadeOut(1000, function() {
  //   $("#notificacionEnvio").fadeIn(2000, function(){
  //     $("#notificacionEnvio").fadeOut(2000, function(){
  //       const formulario = document.getElementById("formContact");
  //       formulario.reset();
  //     })
  //   })
  // });
});

// $("#formContact").submit(function (e) { 
//   e.preventDefault();
//   fetch("https://formsubmit.co/ajax/ing.pierredindy@gmail.com", {
//     method: "POST",
//     body: new FormData(e.target)
//   })
//   .then(res => res.ok ? res.json(): Promise.reject(res))
//   .then(json => {
//     console.log(json)
//   })
//   .catch(err => {
//     console.log(err);
//   })
// })