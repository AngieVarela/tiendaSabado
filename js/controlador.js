//Comentario de linea

/*
comentario de bloque
*/

//VARIABLES

let nombreUsuario= "Angie"
let estaturaUsuario= 1.
let edadUsuario= 32
let telefonoUSuario= "3016971293"
let esPaisa= true //(banderas)

//CONSTANTES
const APELLIDOS_USUARIO= "Varela Castaño"

if (true){

    let nombreUsuario= "Paola"
    console.log(nombreUsuario)
}

//UNIR LOS MENSAJES CON LAS VARIABLES
//CONCATENAR)

//console.log("Buenas tardes "+nombreUsuario+" su edad es "+edadUsuario)
//console.log(`Buenas tardes ${nombreUsuario} su edad es ${edadUsuario}`)

//UTILIZANDO EL DOM
let etiquetacontacto = document.getElementById("contacto")
etiquetacontacto.textContent="Contactanos"
etiquetacontacto.classList.add("text-danger")


let titulodeMenu=document.getElementById("tituloMenu")
titulodeMenu.textContent="LIBRERÍA VIDA"

//*********************************************************** 

//IMPORTANTO MODULOS
import {pintarTienda} from './llenadoTienda.js'
import{ampliarInformacion} from './ampliarinfo.js'

//llamando al modulo de pintar
pintarTienda()

//llamando al modulo ampliarinfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()
})