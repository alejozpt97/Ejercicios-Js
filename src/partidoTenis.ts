function mostrarJuegoTenis(secuencia: string[]): void {
    let puntajeP1 = 0;
    let puntajeP2 = 0;
    const puntajes = ["Love", "15", "30", "40"];

    for (const punto of secuencia) {
        if (punto === "P1") {
            puntajeP1++;
        } else if (punto === "P2") {
            puntajeP2++;
        } else {
            console.error("Entrada inválida en la secuencia");
            return;
        }

        // Mostrar el puntaje actual
        if (puntajeP1 >= 3 && puntajeP2 >= 3) {
            if (puntajeP1 === puntajeP2) {
                console.log("Deuce");
            } else if (puntajeP1 === puntajeP2 + 1) {
                console.log("Ventaja P1");
            } else if (puntajeP2 === puntajeP1 + 1) {
                console.log("Ventaja P2");
            } else if (puntajeP1 >= puntajeP2 + 2) {
                console.log("Ha ganado el P1");
                return;
            } else if (puntajeP2 >= puntajeP1 + 2) {
                console.log("Ha ganado el P2");
                return;
            }
        } else {
            console.log(`${puntajes[Math.min(puntajeP1, 3)]} - ${puntajes[Math.min(puntajeP2, 3)]}`);
        }
    }

    // Manejo de casos en los que el juego aún no ha terminado
    if (puntajeP1 < 4 && puntajeP2 < 4) {
        console.log("El juego aún no ha terminado");
    }
}

// Ejemplo de uso
const secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"];
mostrarJuegoTenis(secuencia);
