//IMPORTANTO MODULOS

import { pintarTienda } from "./llenadoTienda.js";
import { ampliarInformacion } from "./ampliarinfo.js";

//crear un objeto vacio
let producto={}

//llamando al modulo de pintar
pintarTienda();

//llamando al modulo ampliarinfo
let contenedorTienda = document.getElementById("fila1");

contenedorTienda.addEventListener("click", function (event) {
  let modalinfoproducto = new bootstrap.Modal(document.getElementById("modalinfoproducto"));
  producto=ampliarInformacion(event);
  modalinfoproducto.show();
});

/*let contenedorTiendaLibros = document.getElementById("fila2");

contenedorTiendaLibros.addEventListener("click", function (event) {
  let modalinfolibro = new bootstrap.Modal(document.getElementById("modalinfolibro"));
  ampliarInformacion(event);
  modalinfolibro.show();
});*/

//detectar la accion de añadir a el carrito
//carrito es un arreglo de productos (arreglo de objetos)

let carrito=[]
let boton = document.getElementById("botonAdd")
boton.addEventListener('click', function(event){
  //console.log("estoy añandiendo a el carrito")

  //1. capturar la cantidad del producto
  let cantidad=document.getElementById("cantidad").value
  
  //2. agrego la cantidad al objeto producto
  producto.cantidad=cantidad
  
  //3. agregar el producto a el carrito
  carrito.push(producto)

  //4.calculo la sumatoria de cantidades
  let suma=0
  carrito.forEach(function (producto){
    suma=suma+Number(producto.cantidad)
  })
  
  let capsula=document.getElementById("capsula")
  capsula.textContent=suma

  capsula.classList.remove("invisible")
})

//boton de limpiar
let botonl = document.getElementById("botonlimp")
botonl.addEventListener('click', function(event){
  carrito=[]
  let capsula = document.getElementById("capsula")
  capsula.textContent = 0
  capsula.classList.add("invisible")
})

