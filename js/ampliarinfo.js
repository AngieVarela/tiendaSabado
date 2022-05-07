export function ampliarInformacion(event) {
  //ARTICULOS
  let producto = {}

  if (event.target.classList.contains("btn")) {

    producto = {
      foto:event.target.parentElement.querySelector("img").src,
      nombre:event.target.parentElement.querySelector("h4").textContent,
      precio:event.target.parentElement.querySelector("h5").textContent,
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
}
