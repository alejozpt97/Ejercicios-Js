import * as readline from 'readline'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function juegoDeAdivinanzas(){

    const numeroAleatorio = generarNumeroAleatorio();
    let intentos = 3;

function preguntar() {
    
    
        if (intentos > 0) {

       rl.question(`Intentos restante: ${intentos}, Introduce tu suposicion (1-10): `,(respuesta) =>{

        const suposicion = parseInt(respuesta, 10)

        if (isNaN(suposicion) || suposicion < 1 || suposicion > 10){
            console.log("Por favor, introduce un numero valido entre 1 y 10")
        preguntar()
        return
}
      
        if (suposicion === numeroAleatorio) {
            console.log("¡Felicidades! Has adivinado el número.");
            rl.close()
            process.exit(0)

        } 
        
        else if (suposicion > numeroAleatorio) {
            console.log("Tu suposición es demasiado alta.")
            intentos --
            preguntar()

        } 
        
        else if (suposicion < numeroAleatorio) {
            console.log("Tu suposición es demasiado baja.");
            intentos --
            preguntar()
        }
    })
        
    }
    else {
        console.log(`Lo siento, has perdido. El número era ${numeroAleatorio}.`);
        rl.close()
        process.exit(0)
    }
    
}
preguntar()

}
juegoDeAdivinanzas();

