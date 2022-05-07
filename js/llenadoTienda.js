  export function pintarTienda() {
  //arreglo de objetos

  //ARTICULOS
  let productos = [
    { nombre: "Calienta tazas", precio: "$35.000", foto: "../img/tienda1.png", descripcion: "¿Quieres un calienta tazas USB para mantener siempre tu taza de café caliente?" },
    { nombre: "Silla de lectura", precio: "$30.0000", foto: "../img/tienda2.jpg", descripcion: "Comodo y compacto sillon de lectura con reposapies" },
    { nombre: "Atril de lectura", precio: "$35.000", foto: "../img/tienda3.jpg", descripcion: "Atril metalico para libros, ebooks, tablets, etc. con 6 angulos de inclinación" },
    { nombre: "Soporte para gafas", precio: "$30.000", foto: "../img/tienda4.jpg", descripcion: "Gran regalo de soporte para gafas" },
    { nombre: "Luz de cuello", precio: "$93.000", foto: "../img/tienda5.png", descripcion: "Se coloca en el cuello, varios niveles de intensidad, práctica y versátil" },
    { nombre: "Marca páginas", precio: "$20.000", foto: "../img/tienda7.png", descripcion: "Marcadores de paginas divertidos" },
    { nombre: "Luz con pinza", precio: "$90.000", foto: "../img/tienda6.png", descripcion: "Con funcional pinza, 3 tonos de color y de brillo, 60 horas de batería" },
    { nombre: "Cojín de lectura", precio: "$120.000", foto: "../img/tienda9.jpg", descripcion: "Son mucho mejores que usar un cabecera para leer en la cama, pues no se deforman y hacen que la posición de la espalda sea mucho más ergonómica"},
    { nombre: "Sugeta líbros", precio: "$50.000", foto: "../img/tienda8.jpg", descripcion: "Son regalos originales y útiles que sirven para decorar la habitación o estantería con tus libros." },
    { nombre: "Ebook", precio: "$6.000", foto: "../img/tienda10.png", descripcion: "Libros electronicos" },
    
    { nombre: "El color del imperio", precio: "$60.000", foto: "../img/libro2.jpg", descripcion: "El secreto del color más maravilloso que jamás ha sido capaz de crear la humanidad" },
    { nombre: "Hush Hush", precio: "$45.000", foto: "../img/libro1.jpg", descripcion: "Aneles caidos, nefilim y humanos" },
    { nombre: "El teorema de khaterine", precio: "$50.000", foto: "../img/libro4.jpg", descripcion: "Para escapar de su mal de amores, y con el propósito de hallar un teorema que explique la maldición de las Katherine" },
    { nombre: "Gravity falls", precio: "$39.000", foto: "../img/libro5.jpg", descripcion: "Vacaciones de verano" },
    { nombre: "Mil veces hasta siempre", precio: "$50.000", foto: "../img/libro3.jpg", descripcion: "Una brillante historia sobre el amor, la resiliencia y el poder de la amistad para toda la vida" },
    { nombre: "Galletas", precio: "$50.000", foto: "../img/libro10.jpg", descripcion: "Recetas de libros" },
    { nombre: "Adulterio", precio: "$45.000", foto: "../img/libro6.jpg", descripcion: "Amor de ensueño, si no has amado no has vivido" },
    { nombre: "El caballero de la armadura oxidada", precio: "$45.000", foto: "../img/libro8.jpg", descripcion: " Sus profundas enseñanzas éticas son de una sencillez y humildad tal que se consiguen interiorizar naturalmente y la riqueza de su prosa nos inunda de belleza" },
    { nombre: "La teoria del caos", precio: "$60.000", foto: "../img/libro9.png", descripcion: "La teoría de la relatividad y la mecánica cuántica" },
    { nombre: "Inventario 1-poesia", precio: "$50.000", foto: "../img/libro7.jpg", descripcion: "Poesia para la vida" },
    
  ]

  //Necesito recorrer un arreglo en JS
  //1.Creo una variable para almacenar la base sobre la cual voy a pintar

  let fila1 = document.getElementById("fila1")
  productos.forEach(function (producto) {

    //2. pintando etiquetas

    //div con la clase col -- creo columnas
    let columna = document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src = producto.foto

    //h4 con la clase text-center
    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent = producto.nombre

    let precio = document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent = producto.precio

    let descripcion = document.createElement("p")
    descripcion.classList.add("text-center");
    descripcion.textContent = producto.descripcion

    let boton = document.createElement("button")
    boton.setAttribute("type", "button")
    boton.classList.add("btn", "btn-info", "mx-4", "mb-4")
    boton.textContent = "Ver Detalle"

    //3. PADRES E HIJOS
    columna.appendChild(tarjeta)
    fila1.appendChild(columna)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)

  })
}
