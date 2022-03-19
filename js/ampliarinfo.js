export function ampliarInformacion(event) {
  //ARTICULOS
  let producto = {};
  if (event.target.classList.contains("btn")) {
    producto = {
      foto: event.target.parentElement.querySelector("img").src,
      nombre: event.target.parentElement.querySelector("h4").textContent,
      precio: event.target.parentElement.querySelector("h5").textContent,
      descripcion: event.target.parentElement.querySelector("h5").textContent,
    };

    //console.log(producto);

    //asociando valores respectivos al modal
    let foto = document.getElementById("fotoinfo");
    foto.src = producto.foto;

    let nombre = document.getElementById("nombreinfo");
    nombre.textContent = producto.nombre;

    let precio = document.getElementById("precioinfo");
    precio.textContent = producto.precio;

    let descripcion = document.getElementById("descripcioninfo");
    descripcion.textContent = producto.descripcion;
  }

  //LIBROS
  let libro = {};
  if (event.target.classList.contains("btn")) {
    libro = {
      foto: event.target.parentElement.querySelector("img").src,
      nombre: event.target.parentElement.querySelector("h4").textContent,
      precio: event.target.parentElement.querySelector("h5").textContent,
      descripcion: event.target.parentElement.querySelector("h5").textContent,
    };

    console.log(libro);

    //asociando valores respectivos al modal
    let foto = document.getElementById("fotoinfo");
    foto.src = libro.foto;

    let nombre = document.getElementById("nombreinfo");
    nombre.textContent = libro.nombre;

    let precio = document.getElementById("precioinfo");
    precio.textContent = libro.precio;

    let descripcion = document.getElementById("descripcioninfo");
    descripcion.textContent = producto.descripcion;
  }
}
