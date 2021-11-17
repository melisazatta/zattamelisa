//formulario

function formulario() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let mensaje = document.getElementById("message").value;

    if (nombre == null || nombre.length == 0) {
        alert("ERROR: El campo nombre no debe ir vacio");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Debe escribir un correo válido");
        return false;
    }
    if (telefono == null || telefono.length == 0 || isNaN(telefono)) {
        alert("Debe ingresar un número de telefono");
        return false;
    }
    if (mensaje == null || mensaje.length == 0) {
        alert("Debe escribir un mensaje")
        return false;
    }
    return true;
}

//carrito
//Funciones
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
// --agregar despues
const listaProductos = document.querySelector("#lista-carrito tbody");

//Listeners

cargarEventListeners();
function cargarEventListeners() {
    productos.addEventListener("click", comprarProducto);
}


//añadir producto al carrito
function comprarProducto(e) {
    e.preventDefault();

    console.log(e.target.classList);
    if (e.target.classList.contains("agregar-carrito")) {
        const producto = e.target.parentElement.parentElement;
        // enviamos el producto seleccionado
        leerDatosProducto(producto);
    }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
    // crear objeto
    const infoProducto = {
        imagen: producto.querySelector("img").src,
        nombre: producto.querySelector("h5").textContent,
        precio: producto.querySelector(".precio").textContent,
        id: producto.querySelector("a"),
    };

    insertarCarrito(infoProducto);
}

// Muestra el producto seleccionado en el Carrito
function insertarCarrito(producto) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>  
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class=""> X 
            </a>
        </td>
    `;
    listaProductos.appendChild(row);
}


