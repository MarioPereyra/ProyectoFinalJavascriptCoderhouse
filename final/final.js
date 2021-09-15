let stockProductos = [];

const obtenerProductos = async () => {
  const resp = await fetch("./stock.json");
  const data = await resp.json();

  stockProductos = data;
  mostrarProductos(stockProductos);
};

obtenerProductos();

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const selectFiltro = document.getElementById("medidas");
const selectPrecios = document.getElementById("precioTotal");

const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

const carrito = [];

function mostrarProductos(array) {
  contenedorProductos.innerHTML = "";

  array.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `  
                      <img src=${producto.img} alt="">
                      <h3>${producto.nombre}</h3>
                      <p>${producto.desc}</p>
                      <p>Medidas: ${producto.medidas}</p>
                      <p class="precioProducto">Precio: $${producto.precio}</p>
                      <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar</button>  
        `;

    contenedorProductos.appendChild(div);
  });
}

function agregarAlCarrito(itemId) {
  let itemEnCarrito = carrito.find((el) => el.id == itemId);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    let { id, nombre, precio } = stockProductos.find((el) => el.id == itemId);
    carrito.push({ id: id, nombre, precio: precio, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  console.log(carrito);

  actualizarCarrito();
}

function eliminarProducto(id) {
  let productoAEliminar = carrito.find((el) => el.id == id);

  productoAEliminar.cantidad--;

  if (productoAEliminar.cantidad == 0) {
    let indice = carrito.indexOf(productoAEliminar);
    carrito.splice(indice, 1);
  }

  console.log(carrito);
  actualizarCarrito();
}

function actualizarCarrito() {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `
    <p>${producto.nombre}</p>
    <p>Precio: $${producto.precio * producto.cantidad}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <button onclick=eliminarProducto(${
      producto.id
    }) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;

    contenedorCarrito.appendChild(div);
  });

  contadorCarrito.innerText = carrito.length;
  precioTotal.innerText = carrito.reduce(
    (acc, el) => acc + el.precio * el.cantidad,
    0
  );
}

const finalizarCompra = async () => {
  const productosMP = carrito.map((prod) => {
    return {
      title: prod.nombre,
      description: "",
      picture_url: "",
      category_id: prod.id,
      quantity: prod.cantidad,
      currency_id: "ARS",
      unit_price: prod.precio,
    };
  });

  const resp = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer TEST-8068387290953939-091500-bee704c6cf655a4ec0c5a99c995b5204-176570407",
    },
    body: JSON.stringify({
      items: productosMP,
      back_urls: {
        success: "127.0.0.1:5501/final/index.html",
        failure: "",
      },
    }),
  });

  const data = await resp.json();

  window.location.replace(data.init_point);
};

// curl -X POST \
//     'https://api.mercadopago.com/checkout/preferences' \
//     -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//     -H 'Content-Type: application/json' \
//     -d '{
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "cat123",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "payer": {
//     "phone": {},
//     "identification": {},
//     "address": {}
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ]
//   },
//   "shipments": {
//     "free_methods": [
//       {}
//     ],
//     "receiver_address": {}
//   },
//   "back_urls": {},
//   "differential_pricing": {},
//   "tracks": [
//     {
//       "type": "google_ad"
//     }
//   ]
// }'

// // function filtrar() {
//   let valorFiltroMedidas = selectFiltro.value;
//   let calorFiltroPrecios = selectPrecios.value;

//   let arrayFiltrado = [];

//   if (valorFiltroMedidas == "all") {
//     arrayFiltrado = stockProductos;
//   } else {
//     arrayFiltrado = stockProductos.filter(
//       (el) => el.talle == selectFiltro.value
//     );
//   }

//   if (valorFiltroPrecios == 1) {
//     arrayFiltrado = arrayFiltrado.filter((el) => el.precio <= 5000);
//   } else if (valorFiltroPrecios == 2) {
//     arrayFiltrado = arrayFiltrado.filter((el) => el.precio >= 5000);
//   }

//   mostrarProductos(arrayFiltrado);
// }
