let contador = 0;

function actualizarVista() {
    document.getElementById("valor").textContent = contador;
}

// Función para incrementar el contador
function incrementar() {
    contador++;
    actualizarVista();
}

// Función para disminuir el contador
function decrementar() {
    contador--;
    actualizarVista();
}