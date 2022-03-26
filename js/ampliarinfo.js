export function ampliarInformacion(event) {
  //ARTICULOS
  let producto = {}

  if (event.target.classList.contains("btn")) {

    producto = {
      foto:event.target.parentElement.querySelector("img").src,
      nombre:event.target.parentElement.querySelector("h4").textContent,
      precio:event.target.parentElement.querySelector("h5").textContent,
      descripcion:event.target.parentElement.querySelector("p").textContent
    }

    //console.log(producto);

    //asociando valores respectivos al modal
    let foto = document.getElementById("fotoinfo") //traer la informacion del modal y pintar
    foto.src = producto.foto

    let nombre = document.getElementById("nombreinfo")
    nombre.textContent = producto.nombre

    let precio = document.getElementById("precioinfo")
    precio.textContent = producto.precio

    let descripcion = document.getElementById("descripcioninfo")
    descripcion.textContent = producto.descripcion

    return producto
  }

  /*LIBROS
  let libro = {}
  if (event.target.classList.contains("btn")) {
    libro = {
      foto: event.target.parentElement.querySelector("img").src,
      nombre: event.target.parentElement.querySelector("h4").textContent,
      precio: event.target.parentElement.querySelector("h5").textContent,
      descripcion: event.target.parentElement.querySelector("p").textContent,
    };

    //asociando valores respectivos al modal
    let foto = document.getElementById("fotoinfoL");
    foto.src = libro.foto;

    let nombre = document.getElementById("nombreinfoL");
    nombre.textContent = libro.nombre;

    let precio = document.getElementById("precioinfoL");
    precio.textContent = libro.precio;

    let descripcion = document.getElementById("descripcioninfoL");
    descripcion.textContent = producto.descripcion;
  }*/




}
