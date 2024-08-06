import * as readline from 'readline';

// Define las casas de Hogwarts y sus características
type Casa = 'gryffindor' | 'slytherin' | 'hufflepuff' | 'ravenclaw';

const casas: Record<Casa, { nombre: string; puntos: number }> = {
    gryffindor: { nombre: "Gryffindor", puntos: 0 },
    slytherin: { nombre: "Slytherin", puntos: 0 },
    hufflepuff: { nombre: "Hufflepuff", puntos: 0 },
    ravenclaw: { nombre: "Ravenclaw", puntos: 0 }
};

// Define las preguntas y sus respuestas, con el puntaje asociado a cada casa
interface Respuesta {
    texto: string;
    casa: Casa;
}

interface Pregunta {
    pregunta: string;
    respuestas: Respuesta[];
}

const preguntas: Pregunta[] = [
    {
        pregunta: "¿Cuál es tu mayor cualidad?",
        respuestas: [
            { texto: "Coraje", casa: "gryffindor" },
            { texto: "Ambición", casa: "slytherin" },
            { texto: "Lealtad", casa: "hufflepuff" },
            { texto: "Inteligencia", casa: "ravenclaw" }
        ]
    },
    {
        pregunta: "¿Cómo prefieres pasar tu tiempo libre?",
        respuestas: [
            { texto: "Haciendo algo atrevido", casa: "gryffindor" },
            { texto: "Planificando algo estratégico", casa: "slytherin" },
            { texto: "Ayudando a los demás", casa: "hufflepuff" },
            { texto: "Leyendo un libro", casa: "ravenclaw" }
        ]
    },
    {
        pregunta: "¿Cuál es tu meta principal?",
        respuestas: [
            { texto: "Ser valiente y defender a los demás", casa: "gryffindor" },
            { texto: "Lograr el éxito y el poder", casa: "slytherin" },
            { texto: "Construir relaciones y ser justo", casa: "hufflepuff" },
            { texto: "Buscar el conocimiento y la sabiduría", casa: "ravenclaw" }
        ]
    },
    {
        pregunta: "¿Qué valoras más en un amigo?",
        respuestas: [
            { texto: "Lealtad y valentía", casa: "gryffindor" },
            { texto: "Astucia y ambición", casa: "slytherin" },
            { texto: "Trabajo en equipo y honestidad", casa: "hufflepuff" },
            { texto: "Inteligencia y creatividad", casa: "ravenclaw" }
        ]
    },
    {
        pregunta: "¿Cómo te sientes al enfrentar un reto?",
        respuestas: [
            { texto: "Lo enfrento con valentía", casa: "gryffindor" },
            { texto: "Lo analizo y planeo", casa: "slytherin" },
            { texto: "Trabajo duro para superarlo", casa: "hufflepuff" },
            { texto: "Busco soluciones creativas", casa: "ravenclaw" }
        ]
    }
];

// Función para hacer una pregunta y obtener una respuesta del usuario
function hacerPregunta(pregunta: string, respuestas: Respuesta[]): Promise<Casa> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log(`\n${pregunta}`);
        respuestas.forEach((respuesta, index) => {
            console.log(`${index + 1}. ${respuesta.texto}`);
        });

        rl.question('\nSelecciona una opción (1-4): ', (respuestaSeleccionada) => {
            const index = parseInt(respuestaSeleccionada) - 1;
            if (index >= 0 && index < respuestas.length) {
                resolve(respuestas[index].casa);
            } else {
                console.log('Opción no válida. Intenta de nuevo.');
                resolve(hacerPregunta(pregunta, respuestas));
            }
            rl.close();
        });
    });
}

// Función principal para realizar el cuestionario y determinar la casa
async function seleccionarCasa() {
    for (const pregunta of preguntas) {
        const casaSeleccionada = await hacerPregunta(pregunta.pregunta, pregunta.respuestas);
        casas[casaSeleccionada].puntos++;
    }

    const casaGanadora = Object.values(casas).reduce((a, b) => a.puntos > b.puntos ? a : b);

    console.log(`\n¡Felicidades! Eres seleccionado para la casa: ${casaGanadora.nombre}`);
}

// Ejecutar el programa
seleccionarCasa();