import * as readline from 'readline';

// Configurar readline para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para contar palabras
function countWords(text: string): number {
    return text.trim().split(/\s+/).length;
}

// Función para contar oraciones
function countSentences(text: string): number {
    const sentenceEndings = /[.!?]/;
    return text.split(sentenceEndings).filter(sentence => sentence.trim().length > 0).length;
}

// Solicitar al usuario que ingrese un mensaje
rl.question('Introduce un mensaje de texto: ', (message: string) => {
    const characterCount = message.length;
    const wordCount = countWords(message);
    const sentenceCount = countSentences(message);

    console.log(`\nAnálisis del mensaje:`);
    console.log(`Cantidad de caracteres: ${characterCount}`);
    console.log(`Cantidad de palabras: ${wordCount}`);
    console.log(`Cantidad de oraciones: ${sentenceCount}`);

    // Cerrar la interfaz de readline
    rl.close();
});