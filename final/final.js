let carrito = [];
let subtotal;
let precio_final = 0;

const productos = [
  {
    Tipo: "Cuadrito",
    Marca: "Star Wars",
    Serie: "Han y Leia",
    Imagen: "1.png",
    Precio: 800,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Star Wars",
    Serie: "Boba Fett",
    Imagen: "2.png",
    Precio: 900,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Star Wars",
    Serie: "Leia",
    Imagen: "3.png",
    Precio: 1000,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Marvel",
    Serie: "Loki",
    Imagen: "4.png",
    Precio: 1000,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Marvel",
    Serie: "Wandavision",
    Imagen: "5.png",
    Precio: 800,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Rick & Morty",
    Serie: "Rick & Morty",
    Imagen: "6.png",
    Precio: 1000,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Rick & Morty",
    Serie: "Rick & Morty",
    Imagen: "7.png",
    Precio: 1000,
  },
  {
    Tipo: "Cuadrito",
    Marca: "Star Wars",
    Serie: "Padme",
    Imagen: "8.png",
    Precio: 800,
  },
  {
    Tipo: "Pack Stickers",
    Marca: "Pack 1",
    Serie: "Baphomet",
    Imagen: "9.png",
    Precio: 350,
  },
  {
    Tipo: "Pack Stickers",
    Marca: "Pack 2",
    Serie: "Unicornio",
    Imagen: "10.png",
    Precio: 300,
  },
  {
    Tipo: "Pack Stickers",
    Marca: "Pack 3",
    Serie: "Michis",
    Imagen: "11.png",
    Precio: 350,
  },
  {
    Tipo: "Taza",
    Marca: "Marvel",
    Serie: "Capitana Marvel",
    Imagen: "12.png",
    Precio: 1000,
  },
  {
    Tipo: "Taza",
    Marca: "Star Wars",
    Serie: "Darth Vader",
    Imagen: "13.png",
    Precio: 1200,
  },
  {
    Tipo: "Remera",
    Marca: "Geekamole",
    Serie: "Paltita",
    Imagen: "14.png",
    Precio: 1500,
  },
];

const impuesto = 1.21;

const lista_productos = document.getElementById("lista-productos");

for (i = 0; i < length; i++) {
  productos[i].id = i;
}

show_products(productos);

function show_products(productos) {
  productos.forEach((producto) => {
    let div_producto = document.createElement("tr");
    div_producto.className = "producto";

    let marca = document.createElement("td");
    marca.className = "marca";
    marca.textContent = `${producto.Marca} ${producto.Serie}`;

    let imagen_div = document.createElement("td");
    let imagen = document.createElement("img");
    imagen_div.appendChild(imagen);
    imagen.src = "./img/" + producto.Imagen;
    imagen.className = "imagen";

    let precio = document.createElement("td");
    precio.className = "precio";
    precio.textContent = "$" + producto.Precio;

    let boton_div = document.createElement("td");
    let boton = document.createElement("button");
    boton_div.appendChild(boton);
    boton.innerHTML = "Añadir al carrito";
    boton.className = "btn";
    boton.style.backgroundColor = "rgb(255, 204, 108)";

    let selected = false;

    boton.addEventListener("click", () => {
      selected = !selected;
      if (selected == true) {
        add_to_selected(producto);
        boton.innerHTML = "Eliminar del carrito";
        boton.style.backgroundColor = "red";
      } else if (selected == false) {
        if (carrito != null) {
          remove_from_selected(producto);
          boton.innerHTML = "Añadir al carrito";
          boton.style.backgroundColor = "rgb(255, 204, 108)";
        }
      }
    });

    div_producto.appendChild(imagen_div);
    div_producto.appendChild(marca);
    div_producto.appendChild(precio);
    div_producto.appendChild(boton_div);

    lista_productos.appendChild(div_producto);
  });
}

function add_to_selected(item) {
  item = JSON.stringify(item);
  carrito.push(item);
  localStorage.setItem("carrito", carrito);

  console.log(localStorage.getItem("carrito"));
}

function remove_from_selected(item) {
  carrito.splice(carrito.indexOf(item));
  localStorage.setItem("carrito", carrito);
}

function add_price(array) {
  for (let i = 0; i < array.length; i++) {
    subtotal += array[i].Precio;
  }
  return subtotal;
}
