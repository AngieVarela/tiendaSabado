
export function pintarTienda(){

    //arreglo de objetos
let productos=[

    {nombre:"Calienta tazas",precio:35000, foto:"../img/tienda1.png",descripción:"¿Quieres un calienta tazas USB para mantener siempre tu taza de café caliente?"},
    {nombre:"Silla de lectura",precio:346000, foto:"../img/tienda2.jpg",descripción:"Comodo y compacto sillon de lectura con reposapies"},
    {nombre:"Atril de lectura",precio:35000, foto:"../img/tienda3.jpg",descripción:"Atril metalico para libros, ebooks, tablets, etc. con 6 angulos de inclinación"},
    {nombre:"Soporte para gafas",precio:30000, foto:"../img/tienda4.jpg",descripción:"Gran regalo de soporte para gafas"},
    {nombre:"Luz de cuello",precio:93000, foto:"../img/tienda5.png",descripción:"Se coloca en el cuello, varios niveles de intensidad, práctica y versátil"},
    {nombre:"Luz con pinza",precio:90000, foto:"../img/tienda6.png",descripción:"Con funcional pinza, 3 tonos de color y de brillo, 60 horas de batería"},
    {nombre:"Marca páginas",precio:20000, foto:"../img/tienda7.png",descripción:"Marcadores de paginas divertidos"},
    {nombre:"Sugeta líbros",precio:50000, foto:"../img/tienda8.jpg",descripción:"Son regalos originales y útiles que sirven para decorar la habitación o estantería con tus libros."},
    {nombre:"Cojín de lectura",precio:120000, foto:"../img/tienda9.jpg",descripción:"Son mucho mejores que usar un cabecera para leer en la cama, pues no se deforman y hacen que la posición de la espalda sea mucho más ergonómica"},
    {nombre:"Ebook",precio:600000, foto:"../img/tienda10.png",descripción:"Libros electronicos"},
]  

/*//Recorriendo un arreglo con JS (buscar/seleccionar)
productos.forEach(function(producto){
    console.log("Librerias")
})


//escuchando clic en el boton
let boton=document.getElementById("boton")

//detectando el primer evento
boton.addEventListener("click",cambiarFoto)

//creando una funcion
function cambiarFoto(){

    let foto=document.getElementById("fotoPrueba")
    foto.src="img/foto3.png"

    //console.log("Hiciste clic")
}

}*/

//Necesito recorrer un arreglo en JS

//1.Creo una variable para almacenar la base sobre la cual voy a pintar
let fila=document.getElementById("fila")
productos.forEach(function(producto){
    console.log(producto.foto)
    console.log(producto.nombre)
    console.log(producto.precio)

    //2. pintando etiquetas

    //div con la clase col -- creo columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    //h4 con la clase text-center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //3. PADRES E HIJOS
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(boton)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})

let boton=document.createElement("button")
boton.setAttribute("type","button")
boton.classList.add("btn","btn-info", "mx-4","mb-4")
boton.textContent="Ver productos"

}
