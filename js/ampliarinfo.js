
export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){

        producto={
            foto:event.target.parentElement.querySelector("img").src,
            nombre: event.target.parentElement.querySelector("h4").textContent,            
        }

        console.log(producto)

        //asociando valores respectivos al modal
        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreinfo")
        nombre.textContent=producto.nombre
    }
}