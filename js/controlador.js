//IMPORTANTO MODULOS

import { pintarTienda } from "./llenadoTienda.js";
import { ampliarInformacion } from "./ampliarinfo.js";
import {pintarCarrito} from "./pintarCarrito.js";

//crear un objeto vacio
let producto={}

let modalinfoproducto = new bootstrap.Modal(document.getElementById("modalinfoproducto"));

//llamando al modulo de pintar
pintarTienda();

//llamando al modulo ampliarinfo
let contenedorTienda = document.getElementById("fila1");

contenedorTienda.addEventListener("click", function (event) {
  //let modalinfoproducto = new bootstrap.Modal(document.getElementById("modalinfoproducto"));
  producto=ampliarInformacion(event);
  modalinfoproducto.show();
});

let carrito=[]
let boton = document.getElementById("botonAdd")
boton.addEventListener('click', function(event){

  //1. capturar la cantidad del producto
  let cantidad=document.getElementById("cantidad").value
  
  //2. agrego la cantidad al objeto producto
  producto.cantidad=cantidad
  
  //3. agregar el producto a el carrito
  carrito.push(producto) //llenamos el carrito

  //4.calculo la sumatoria de cantidades
  let suma=0
  carrito.forEach(function (producto){
    suma=suma+Number(producto.cantidad)
  })
  
  pintarCarrito(suma);
  modalinfoproducto.hide();

})

//boton de limpiar
let botonl = document.getElementById("botonlimp")
botonl.addEventListener("click", function(event){
  carrito=[]
  let capsula = document.getElementById("capsula")
  capsula.textContent = 0
  capsula.classList.add("invisible")
})

//Ver resumen de venta
let  botonCarrito = document.getElementById("botoncarrito")
let modalVenta = new bootstrap.Modal(document.getElementById('resumenventa'))
let subtotal=0


botonCarrito.addEventListener("click",function(event){

  let contenedor =document.getElementById("contenedorventa")

  //Borrar el contenido HTML de una seccion
  contenedor.innerHTML=""


  //recorrer el carrito para pintar los productos en la factura
  carrito.forEach(function(producto){
    
    let a=producto.cantidad
    let b=producto.precio
    let totalA=0
    let totalB=0

    //calculo el subtotal de cantidad*precio
    subtotal=a*b
    totalA=subtotal
    totalB= totalA+totalB

    //TRAVERSING
  let fila1=document.createElement("div")
  fila1.classList.add("row")

  let columna1=document.createElement("div")
  columna1.classList.add("col-12","col-md-4")

  let columna2=document.createElement("div")
  columna2.classList.add("col-12","col-md-8")

  let foto=document.createElement("img")
  foto.classList.add("img-fluid", "w-100")
  foto.src=producto.foto

  let nombre=document.createElement("h6")
  nombre.classList.add("text-center")
  nombre.textContent=producto.nombre

  let cantidad=document.createElement("h6")
  cantidad.classList.add("text-center")
  cantidad.textContent="Cantidad: "+producto.cantidad

  // let precio=document.createElement("h6")
  // precio.classList.add("text-center")
  // precio.textContent=producto.precio

  let tvtotal=document.createElement("h6")
  tvtotal.classList.add("text-center")
  tvtotal.textContent="Subtotal: "+totalB

  
  //PADRES E HIJOS
  columna1.appendChild(foto)
  columna2.appendChild(nombre)
  columna2.appendChild(cantidad)
  // columna2.appendChild(precio)
  columna2.appendChild(tvtotal)

  //columna2.appendChild(subtotal)

  fila1.appendChild(columna1)
  fila1.appendChild(columna2)

  contenedor.appendChild(fila1)
  })

  modalVenta.show()

})

