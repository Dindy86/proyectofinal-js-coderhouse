//Declaración de variables 
let busquedaProductos = JSON.parse(localStorage.getItem("arrayProductoBuscados"));
let tituloPagina = document.getElementById("tituloPrincipal");

//Declaración de función 
function buscarProductos() {
  if (busquedaProductos ) {
    for (const producto of busquedaProductos) {
      if (tituloPagina.textContent != "ROSE TIENDA DE ROPA") {
        ruta = (producto.img).replace("./","../");
      } 
      $("#seccionArticulo").append(`
        <div class="card m-auto mb-3 card-transition" style="width: 13rem;">
          <img id="img1" src="${ruta}" class="card-img-top" alt="traje de hombre">
          <div class="card-body">
            <p class="item__paragraph"> <span class="item_paragraph__bold"> $100.00 <span class="item_paragraph__lineThrough" > 110.00$ </span></span> <br>"${producto.nombre}"</p>
            <button id="${producto.id}" class="btn btn-primary btn-item">+ Add</button>
          </div>
        </div>
      `);
    }
  } else {
    $("#controlBusqueda").append(`
      <p>No hubo resultados para tu búsqueda</p>
    `);
  }
}

//Invocación de función
buscarProductos();