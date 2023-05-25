function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi, "ens")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "alt")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        .replace(/b/gi, "bin" )
        .replace(/s/gi, "saz")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        muneco.src = "Imagenes /muneco.png";
    } else {
        muneco.src = "Imagenes /muneco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha encontrado texto a encriptar!',
            })
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/ens/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/alt/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
        .replace(/bin/gi, "b" )
        .replace(/saz/gi, "s")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        muneco.src = "Imagenes /muneco.png";
    } else {
        muneco.src = "Imagenes /muneco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha encontrado texto a encriptar',
            })
    }
}