import * as readline from 'readline';

function encriptarMensaje(mensaje: string): string {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const alfabetoMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mensajeEncriptado = "";

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];

        if (alfabeto.includes(caracter)) {
            let indice = (alfabeto.indexOf(caracter) + 1) % alfabeto.length;
            mensajeEncriptado += alfabeto[indice];
        } else if (alfabetoMayusculas.includes(caracter)) {
            let indice = (alfabetoMayusculas.indexOf(caracter) + 1) % alfabetoMayusculas.length;
            mensajeEncriptado += alfabetoMayusculas[indice];
        } else {
            mensajeEncriptado += caracter;
        }
    }

    return mensajeEncriptado;
}

// Crear interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar mensaje del usuario
rl.question("Introduce un mensaje para encriptar: ", (mensaje: string) => {
    const mensajeEncriptado = encriptarMensaje(mensaje);
    console.log(`Mensaje encriptado: ${mensajeEncriptado}`);
    rl.close();
});