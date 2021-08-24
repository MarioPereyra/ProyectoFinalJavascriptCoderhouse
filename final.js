let carrito = [];
let subtotal = 0;
let precioFinal = 0;

const listaProductos = [
  { id: 1, producto: "Manzana", precio: 200 },
  { id: 2, producto: "Naranja", precio: 100 },
  { id: 3, producto: "Cereza", precio: 510 },
  { id: 4, producto: "Banana", precio: 500 },
  { id: 5, producto: "Durazno", precio: 150 },
  { id: 6, producto: "Ananá", precio: 490 },
];

let findManzana = listaProductos.find((producto) => producto.id === 1);
let findNaranja = listaProductos.find((producto) => producto.id === 2);
let findCereza = listaProductos.find((producto) => producto.id === 3);
let findBanana = listaProductos.find((producto) => producto.id === 4);
let findDurazno = listaProductos.find((producto) => producto.id === 5);
let findAnana = listaProductos.find((producto) => producto.id === 6);

// Prompt

let buscador = prompt("¿Qué producto de la lista querés buscar?");
while (buscador != "ESC") {
  switch (buscador) {
    case "manzana":
      console.log(findManzana);
      break;
    case "naranja":
      console.log(findNaranja);
      break;
    case "cereza":
      console.log(findCereza);
      break;
    case "banana":
      console.log(findBanana);
      break;
    case "durazno":
      console.log(findDurazno);
      break;
    case "ananá":
      console.log(findAnana);
      break;
    default:
      alert(
        "Por favor, agregá un producto de la lista o escribí 'ESC' para cancelar."
      );
      break;
  }
  buscador = prompt(
    "Por favor agregá un producto de la lista, o escribí 'ESC' para cancelar."
  );
}

alert("Hagamos la cuenta de todo lo que querés comprar.");
let precioProducto = parseInt(
  prompt(
    "Agregá el precio del producto al que querés calcular el descuento en efectivo y el IVA."
  )
);

const suma = function (a, b) {
  return a + b;
};
const resta = function (a, b) {
  return a - b;
};

const iva = (x) => x * 0.21;
let precioDescuento = 50;

let totalPrecio = resta(
  suma(precioProducto, iva(precioProducto)),
  precioDescuento
);

alert("Tu total es de: " + totalPrecio + ".");
