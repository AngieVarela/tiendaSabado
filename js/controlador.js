//IMPORTANTO MODULOS

import { pintarTienda } from "./llenadoTienda.js";
import { ampliarInformacion } from "./ampliarinfo.js";

//llamando al modulo de pintar
pintarTienda();

//llamando al modulo ampliarinfo
let contenedorTienda = document.getElementById("fila1");

contenedorTienda.addEventListener("click", function (btn) {
  let modalinfoproducto = new bootstrap.Modal(document.getElementById("modalinfoproducto"));
  ampliarInformacion(event);
  modalinfoproducto.show();
});

let contenedorTiendaLibros = document.getElementById("fila2");

contenedorTiendaLibros.addEventListener("click", function (event) {
  let modalinfolibro = new bootstrap.Modal(document.getElementById("modalinfolibro"));
  ampliarInformacion(event);
  modalinfolibro.show();
});
