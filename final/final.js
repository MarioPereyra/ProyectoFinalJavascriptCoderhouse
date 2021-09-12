const productos = [
  {
    Nombre: "Han y Leia",
    Imagen: "1.png",
    Precio: 800,
  },
  {
    Nombre: "Boba Fett",
    Imagen: "2.png",
    Precio: 900,
  },
  {
    Nombre: "Leia",
    Imagen: "3.png",
    Precio: 1000,
  },
  {
    Nombre: "Loki",
    Imagen: "4.png",
    Precio: 1000,
  },
  {
    Nombre: "Wandavision",
    Imagen: "5.png",
    Precio: 800,
  },
  {
    Nombre: "Rick",
    Imagen: "6.png",
    Precio: 1000,
  },
  {
    Nombre: "Rick & Morty",
    Imagen: "7.png",
    Precio: 1000,
  },
  {
    Nombre: "Padme",
    Imagen: "8.png",
    Precio: 800,
  },
  {
    Nombre: "Stickers Baphomet",
    Imagen: "9.png",
    Precio: 350,
  },
  {
    Nombre: "Stickers Unicornio",
    Imagen: "10.png",
    Precio: 300,
  },
  {
    Nombre: "Stickers Michis",
    Imagen: "11.png",
    Precio: 350,
  },
  {
    Nombre: "Taza Capitana Marvel",
    Imagen: "12.png",
    Precio: 1000,
  },
  {
    Nombre: "Taza Darth Vader",
    Imagen: "13.png",
    Precio: 1200,
  },
  {
    Nombre: "Remera Paltita",
    Imagen: "14.png",
    Precio: 1500,
  },
];

let carrito = {};

for (const producto of productos) {
  $(".listaProductos").append(`<div><h3>${producto.Nombre}</h3>
  <img class="prod" src=./img/${producto.Imagen}>
  <p>Precio: $ ${producto.Precio}</p>
  <button class="btn" id="items">Añadir al Carrito</button></div>`);
}

const addCarrito = (e) => {
  console.log(e.target.classList.contains("items"));
};

$(".btn").click(() =>
  Swal.fire({
    icon: "success",
    title: "¡Yay!",
    text: "Agregaste un producto al carrito.",
  })
);
