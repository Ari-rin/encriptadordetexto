// Selección de elementos
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonLimpiar = document.querySelector(".btn-limpiar");
var resultado = document.querySelector(".texto-resultado");
var btnCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");

// Asociar funciones a los botones
botonEncriptar.onclick = function () {
    ocultarAdelante();
    var texto = recuperarTexto();
    var textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
};

botonDesencriptar.onclick = function () {
    ocultarAdelante();
    var texto = recuperarTexto();
    var textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
};

// Nuevo botón de limpiar
botonLimpiar.onclick = function () {
    var cajatexto = document.querySelector(".cajatexto");
    cajatexto.value = ""; // Limpia el contenido del textarea
    resultado.textContent = ""; // Limpia el resultado
    btnCopiar.classList.add("ocultar"); // Oculta el botón de copiar
    mostrarMensajeInicial(); // Muestra el mensaje inicial
};

// Recuperar texto del textarea
function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

// Mostrar el resultado en el contenedor
function mostrarResultado(texto) {
    resultado.textContent = texto;
    btnCopiar.disabled = texto.trim() === ""; // Habilitar solo si hay texto
    btnCopiar.classList.remove("ocultar"); // Asegurarnos de que el botón esté visible
}

// Función para mostrar el mensaje inicial
function mostrarMensajeInicial() {
    munieco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}

// Función para ocultar elementos de bienvenida
function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Función de encriptación
function encriptarTexto(mensaje) {
    return mensaje.replace(/a/g, "ai")
                  .replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
}

// Función de desencriptación
function desencriptarTexto(mensaje) {
    return mensaje.replace(/ufat/g, "u")
                  .replace(/ober/g, "o")
                  .replace(/imes/g, "i")
                  .replace(/enter/g, "e")
                  .replace(/ai/g, "a");
}

// Función para copiar texto al portapapeles
btnCopiar.onclick = function () {
    var contenido = resultado.textContent;
    if (contenido !== "") {
        navigator.clipboard.writeText(contenido).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            console.error("Error al copiar: ", err);
        });
    } else {
        alert("No hay texto para copiar");
    }
};

