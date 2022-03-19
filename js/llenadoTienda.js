export function pintarTienda() {
  //arreglo de objetos

  //ARTICULOS
  let productos = [
    { nombre: "Calienta tazas", precio: 35000, foto: "../img/tienda1.png", descripcion: "¿Quieres un calienta tazas USB para mantener siempre tu taza de café caliente?" },
    { nombre: "Silla de lectura", precio: 300000, foto: "../img/tienda2.jpg", descripcion: "Comodo y compacto sillon de lectura con reposapies" },
    { nombre: "Atril de lectura", precio: 35000, foto: "../img/tienda3.jpg", descripcion: "Atril metalico para libros, ebooks, tablets, etc. con 6 angulos de inclinación" },
    { nombre: "Soporte para gafas", precio: 30000, foto: "../img/tienda4.jpg", descripcion: "Gran regalo de soporte para gafas" },
    { nombre: "Luz de cuello", precio: 93000, foto: "../img/tienda5.png", descripcion: "Se coloca en el cuello, varios niveles de intensidad, práctica y versátil" },
    { nombre: "Luz con pinza", precio: 90000, foto: "../img/tienda6.png", descripcion: "Con funcional pinza, 3 tonos de color y de brillo, 60 horas de batería" },
    { nombre: "Marca páginas", precio: 20000, foto: "../img/tienda7.png", descripcion: "Marcadores de paginas divertidos" },
    { nombre: "Sugeta líbros", precio: 50000, foto: "../img/tienda8.jpg", descripcion: "Son regalos originales y útiles que sirven para decorar la habitación o estantería con tus libros." },
    {
      nombre: "Cojín de lectura",
      precio: 120000,
      foto: "../img/tienda9.jpg",
      descripcion: "Son mucho mejores que usar un cabecera para leer en la cama, pues no se deforman y hacen que la posición de la espalda sea mucho más ergonómica",
    },
    { nombre: "Ebook", precio: 60.0, foto: "../img/tienda10.png", descripcion: "Libros electronicos" },
  ];

  //LIBROS

  let libros = [
    { nombre: "Hush Hush", precio: 45000, foto: "../img/libro1.jpg", descripcion: "...." },
    { nombre: "El color del imperio", precio: 60000, foto: "../img/libro2.jpg", descripcion: "..." },
    { nombre: "Mil veces hasta siempre", precio: 50000, foto: "../img/libro3.jpg", descripcion: "..." },
    { nombre: "El teorema de khaterine", precio: 50000, foto: "../img/libro4.jpg", descripcion: "..." },
    { nombre: "Gravity falls", precio: 39000, foto: "../img/libro5.jpg", descripcion: "..." },
    { nombre: "Adulterio", precio: 45000, foto: "../img/libro6.jpg", descripcion: "..." },
    { nombre: "Inventario 1-poesia", precio: 50000, foto: "../img/libro7.jpg", descripcion: "..." },
    { nombre: "El caballero de la armadura oxidada", precio: 45000, foto: "../img/libro8.jpg", descripcion: "..." },
    { nombre: "La teoria del caos", precio: 60000, foto: "../img/libro9.png", descripcion: "..." },
    { nombre: "Galletas", precio: 50000, foto: "../img/libro10.jpg", descripcion: "Recetas de libros" },
  ];

  //Necesito recorrer un arreglo en JS

  //1.Creo una variable para almacenar la base sobre la cual voy a pintar

  //ARTICULOS
  let fila1 = document.getElementById("fila1");
  productos.forEach(function (producto) {
    // console.log(producto.foto);
    // console.log(producto.nombre);
    // console.log(producto.precio);
    // console.log(producto.descripcion);

    //2. pintando etiquetas

    //div con la clase col -- creo columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    //div con las clases card h-100
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    //img con la clase card-img-top
    let foto = document.createElement("img");
    foto.classList.add("card-img-top");
    foto.src = producto.foto;

    //h4 con la clase text-center
    let titulo = document.createElement("h4");
    titulo.classList.add("text-center");
    titulo.textContent = producto.nombre;

    let precio = document.createElement("h5");
    precio.classList.add("text-center");
    precio.textContent = producto.precio;

    let descripcion = document.createElement("h5");
    descripcion.classList.add("text-center");
    descripcion.textContent = producto.descripcion;

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.classList.add("btn", "btn-info", "mx-4", "mb-4");
    boton.textContent = "Ver producto";

    //3. PADRES E HIJOS
    tarjeta.appendChild(titulo);
    columna.appendChild(tarjeta);
    fila1.appendChild(columna);
    tarjeta.appendChild(foto);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton);
  });

  //LIBROS

  let fila2 = document.getElementById("fila2");
  libros.forEach(function (libro) {
    console.log(libro.foto);
    console.log(libro.nombre);
    console.log(libro.precio);
    console.log(libro.descripcion);

    //2. pintando etiquetas

    //div con la clase col -- creo columnas
    let columna = document.createElement("div");
    columna.classList.add("col");

    //div con las clases card h-100
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    //img con la clase card-img-top
    let foto = document.createElement("img");
    foto.classList.add("card-img-top");
    foto.src = libro.foto;

    //h4 con la clase text-center
    let titulo = document.createElement("h4");
    titulo.classList.add("text-center");
    titulo.textContent = libro.nombre;

    let precio = document.createElement("h5");
    precio.classList.add("text-center");
    precio.textContent = libro.precio;

    let descripcion = document.createElement("h5");
    descripcion.classList.add("text-center");
    descripcion.textContent = libro.descripcion;

    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.classList.add("btn", "btn-info", "mx-4", "mb-4");
    boton.textContent = "Ver Libro";

    //3. PADRES E HIJOS
    tarjeta.appendChild(foto);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton);

    columna.appendChild(tarjeta);
    fila2.appendChild(columna);
  });
}
