//formulario

function formulario() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("phone").value;
    let asunto = document.getElementById("asunto").value;
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
    if (asunto == null || asunto.length == 0) {
        alert("Debe escribir un asunto")
        return false;
    }
    if (mensaje == null || mensaje.length == 0) {
        alert("Debe escribir un mensaje")
        return false;
    }
    return true;
}

// Error404
$(document).mousemove(function (event) {
    $('.torch').css({
      'top': event.pageY,
      'left': event.pageX
    });
  });