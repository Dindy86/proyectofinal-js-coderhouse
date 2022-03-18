//clase Producto
class Producto {
  constructor(id, nombre, marca, descripcion,img, precio, cantidad, descuento = 0){
    this.id =id;
    this.nombre = nombre; 
    this.marca = marca;
    this.descripcion = descripcion;
    this.img = img;
    this.precio = precio;
    this.cantidad =Number(cantidad);
    //iva 10%
    this.iva = 10;
    //Recibe el descuento en porcentaje
    this.descuento = descuento;
    this.descuentoTotalcadaProducto;
    this.ivaTotal;
    this.precioBruto;
    this.precioTotalCadaProducto;
  }

  //Métodos
  agregarProducto(cantidad) {
    this.cantidad += cantidad;
  }

  calcularDescuento() {
    this.descuentoTotalcadaProducto = ((this.precio * this.descuento) / 100) * this.cantidad;
  }

  calcularPrecioBruto() {
    this.precioBruto = (this.precio * this.cantidad) - this.descuentoTotalcadaProducto;
  }

  calcularIVA() {
    this.ivaTotal = ((this.precio * this.iva) / 100) * this.cantidad;
  }
  
  calcularPrecioNeto() {
    this.precioTotalCadaProducto = this.precioBruto + this.ivaTotal;
  }
}

//Variables y array
let productos = [
  {
    id: 0,
    nombre: "camisa",
    marca: "Polo",
    descripcion: "Kit Camisa de hombre",
    img: "./images/Tishirt10.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 1,
    nombre: "traje",
    marca: "Polo",
    descripcion: "Traje de hombre",
    img: "./images/fashionMen5.png",
    precio: 100,
    stock: 60,
    descuento: 10
  },
  {
    id: 2,
    nombre: "vestido",
    marca: "Fendy",
    descripcion: "Vestido corto de mujeres",
    img: "./images/womencloth1.jpg",
    precio: 100,
    stock:80,
    descuento: 10
  },
  {
    id: 3,
    nombre: "blusa",
    marca: "Polo",
    descripcion: "Blusa de mujeres",
    img: "./images/imagenblusa-13.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 4,
    nombre: "vestido",
    marca: "Polo",
    descripcion: "Vestido longo y sin manga",
    img: "./images/fashionWomen1.png",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 5,
    nombre: "vestido",
    marca: "Polo",
    descripcion: "Vestido longo multicolor y sin manga",
    img: "./images/womencloth14.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 6,
    nombre: "jeans",
    marca: "Polo",
    descripcion: "Jeans largo de mujer",
    img: "./images/womenjeans4.png",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 7,
    nombre: "jeans",
    marca: "Polo",
    descripcion: "Jeans de hombre",
    img: "./images/menjeans1.png",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 8,
    nombre: "vestido",
    marca: "Polo",
    descripcion: "Vestido corto pelicano, con mangas cortas",
    img: "./images/womendress19.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 9,
    nombre: "vestido",
    marca: "Polo",
    descripcion: "Vestido con cinta",
    img: "./images/womendress22.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 10,
    nombre: "vestido",
    marca: "Polo",
    descripcion: "Vestido corto pelicano, sin mangas",
    img: "./images/womendress6.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  },
  {
    id: 11,
    nombre: "camisa",
    marca: "Polo",
    descripcion: "Camisa con mangas largas",
    img: "./images/menShirt.jpg",
    precio: 100,
    stock: 50,
    descuento: 10
  }
]

let carrito = cargarCarritoEnLocalStorage();
let arrayProductoBuscado = [];

//Declaracion de las variables del dom
const notificacionDelCarrito = document.getElementById("cartCounterProduct");
const contenedorModal = document.getElementById("idVentanaModal");
let tituloPrincipal = document.getElementById("tituloPrincipal");
const btnModal = document.getElementById("cart");
const cartCounter = document.getElementById("cartCounter");
const cardbutton = document.getElementsByClassName("btn");
const linkBuscar = document.getElementById("buscarProducto");
const inputProducto = document.getElementById("inputProducto");
const formModalPago = document.getElementById("formModalPago");
const btnRealizarPago = document.getElementById("btnRealizarPago");
const contenedorModalPago = document.getElementById("idVentanaModalPago");
const precioTotalVentanaPago = document.getElementById("precioTotalVentanaPago");
const cantidadTotalArticulo = document.getElementById("cantTotalProductoVentanaPago");

//Declaraciónes de funciones
function cargarCarritoEnLocalStorage() {
  let carritoEnLocalStorage = JSON.parse(localStorage.getItem("carritoEnLocalStorage"));
  let array = [];
  if (carritoEnLocalStorage) {
    for(const product of carritoEnLocalStorage) {   
      let producto = new Producto(product.id, product.nombre, product.marca, product.descripcion, product.img, product.precio, product.cantidad, product.descuento);
      producto.calcularDescuento();
      producto.calcularPrecioBruto();
      producto.calcularIVA();
      producto.calcularPrecioNeto();
      array.push(producto);
    }
    return array;
  }
  return array;
}

function agregarProductoAlCarrito(idProducto,cantidad) {
  let productoEnCarrito = carrito.find((element) => element.id ==  idProducto);
  if (productoEnCarrito) {
    let index = carrito.findIndex((element) => element.id == productoEnCarrito.id)
    carrito[index].agregarProducto(Number(cantidad));
    carrito[index].calcularDescuento();
    carrito[index].calcularPrecioBruto();
    carrito[index].calcularIVA();
    carrito[index].calcularPrecioNeto();
  } else {
    carrito.push(new Producto(productos[idProducto].id, productos[idProducto].nombre, productos[idProducto].marca, productos[idProducto].descripcion, productos[idProducto].img, productos[idProducto].precio, Number(cantidad), productos[idProducto].descuento));
    carrito[carrito.length - 1].calcularDescuento();
    carrito[carrito.length - 1].calcularPrecioBruto();
    carrito[carrito.length - 1].calcularIVA();
    carrito[carrito.length - 1].calcularPrecioNeto();
  }
  localStorage.setItem("carritoEnLocalStorage", JSON.stringify(carrito));
  notificacionCarrito();
  mensajeNotificacionCarrito()
  precioTotalEnCarrito();
}

function carritoEnVentanaModal() {
  let tbody = document.getElementById("bodyTabla");
  tbody.innerHTML = "";
  for (const product of carrito) {
    let tr = document.createElement("tr");
    let ruta;
    if (tituloPrincipal.textContent == "ROSE TIENDA DE ROPA") {
      ruta = product.img;
    } else {
      ruta = (product.img).replace("./","../");
    }
    tr.innerHTML = `
                    <td>
                      <img src="${ruta}" style ="width:45px; height:45px; margin-top: 12px">
                    </td>
                    <td><p style="margin-top:23px">${product.nombre}</p></td>                     
                    <td>
                    <div  id="div" style ="border:solid 1px black; width: 25px; margin:0 auto; border-radius:8px">
                      <button id="aumentar${product.id}" class="control" style="display:inline; border: none; background-color:white">+</button>
                      <p id="cantidad${product.id}" style="display:block">${product.cantidad}</p>
                      <button id="decrementar${product.id}" class="control" style="display:inline; border: none; background-color:white">-</button>
                    </div>   
                    </td>              
                    <td><p style="margin-top:23px">${product.precioTotalCadaProducto}$</p></td>
                    <td> 
                      <button style="background-color:white; margin-top:23px; color:red; border-style:none" id="eliminar${product.id}" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </button>
                    </td>`
    tbody.appendChild(tr);
    $(`#aumentar${product.id}`).click(() => { 
      let cantidad = document.getElementById(`cantidad${product.id}`)
      let valor = Number(cantidad.textContent);
      valor++;
      cantidad.textContent = valor;
      modificarCantidadProducto(product.id, valor)
    })

    $(`#decrementar${product.id}`).click(() => { 
      let cantidad = document.getElementById(`cantidad${product.id}`)
      let valor = Number(cantidad.textContent);
      if(valor > 1) {
        valor--;
        cantidad.textContent = valor;
        modificarCantidadProducto(product.id, valor)
      }
    })

    $(`#eliminar${product.id}`).click(() => { 
      eliminarProductoEnCarrito(product.id);
    })
  }
  precioTotalEnCarrito();
  notificacionCarrito();
}

function modificarCantidadProducto(idProducto, cantidad) {
  let index = carrito.findIndex((element) => element.id == idProducto);
  carrito[index].cantidad=(Number(cantidad));
  carrito[index].calcularDescuento();
  carrito[index].calcularPrecioBruto();
  carrito[index].calcularIVA();
  carrito[index].calcularPrecioNeto();
  localStorage.setItem("carritoEnLocalStorage", JSON.stringify(carrito));
  carritoEnVentanaModal();
  precioTotalEnCarrito();
  notificacionCarrito()
}

function eliminarProductoEnCarrito( idProducto) {
  let index = carrito.findIndex((element) => element.id == idProducto);
  if(carrito.length > 1) {
    carrito.splice(index, 1);
  } else {
    carrito.splice(index, 1);
    carrito = [];
  }
  localStorage.setItem("carritoEnLocalStorage", JSON.stringify(carrito));
  carritoEnVentanaModal();
  precioTotalEnCarrito();
  notificacionCarrito()
}

function calcularPrecioTotal() {
  let precioTotal = 0;
  carrito.forEach((element) => {
    precioTotal += element.precioTotalCadaProducto;
  })
  return precioTotal;
}

function precioTotalEnCarrito() {
  let divPrecioTotal = document.getElementById("verPrecioTotal");
  divPrecioTotal.innerHTML = `<p> PRECIO TOTAL: ${calcularPrecioTotal()}$</p>`;
}

function vaciarCarrito() {
  carrito = [];
  localStorage.setItem("carritoEnLocalStorage", JSON.stringify(carrito));
  carritoEnVentanaModal();
  precioTotalEnCarrito();
  notificacionCarrito()
}

function notificacionCarrito() {
  if (carrito.length >= 1 ){
    notificacionDelCarrito.textContent = carrito.length;
  } else{
    notificacionDelCarrito.textContent ="";
  }
}

function llamarAgregarProductoAlCarrito() {
  for( const button of cardbutton) {
    button.addEventListener("click", function(e) {
      const button = e.target;
      //let inputCantidad = Number(button.parentElement.children[1].value);
      agregarProductoAlCarrito(button.id, 1);
      //button.parentElement.children[1].value="1";
    })
  }
}

function mensajeNotificacionCarrito() {
  $("#contenedorNotificacion").fadeIn(1000, function(){
    $("#contenedorNotificacion").fadeOut(1000);
  });
}

function cantidadProductoEnVentanaPago () {
  let cantidadTotalProducto = 0;
  for (const product of carrito) {
    cantidadTotalProducto += product.cantidad;
  }
  cantidadTotalArticulo.textContent = cantidadTotalProducto;
}

function notificacionDePago() {
  $("#formcontenedorLoader").fadeIn(2000);
  $("#formcontenedorLoader").fadeOut(1000, function() {
    $("#formNotificacionPago").fadeIn(2000, function(){
      $("#formNotificacionPago").fadeOut(2000, function(){
      })
    })
  });
}

//Llamada de funciones
llamarAgregarProductoAlCarrito();
notificacionCarrito();

//Eventos
$("#varciarCarrito").click(() => { 
  vaciarCarrito();
});

btnModal.addEventListener("click", function () {
  contenedorModal.classList.add("ventanaModal-displayBlock");
  carritoEnVentanaModal();
})

btnRealizarPago.addEventListener("click", function () {
  if (carrito.length > 0){
    contenedorModalPago.classList.add("ventanaModalPago-displayBlock");
    cantidadProductoEnVentanaPago ();
    precioTotalVentanaPago.textContent = `${calcularPrecioTotal()}$`;
  } 
})

linkBuscar.addEventListener("click", function () {
  localStorage.removeItem("arrayProductoBuscados");
  arrayProductoBuscado = productos.filter((producto) => producto.nombre == ((inputProducto.value).trim()).toLowerCase());
  if(arrayProductoBuscado.length > 0){
    localStorage.setItem("arrayProductoBuscados", JSON.stringify( arrayProductoBuscado));
  }
})

formModalPago.addEventListener("submit", function(e) {
  e.preventDefault();
  const btnpagar = document.getElementById("btnpagar")
  vaciarCarrito();
  notificacionDePago()
  formModalPago.reset();
  precioTotalVentanaPago.textContent ="";
  precioTotalVentanaPago.textContent = "0.00$";
  cantidadTotalArticulo.textContent = "";
  cantidadTotalArticulo.textContent = "0";
  btnpagar.disabled = true;
})