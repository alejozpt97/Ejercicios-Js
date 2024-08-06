import * as readline from 'readline';

// Configurar readline para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para contar vocales tildadas
function countAccentedVowels(word: string): number {
    const accentedVowels = ['á', 'é', 'í', 'ó', 'ú'];
    let count = 0;

    for (let char of word.toLowerCase()) {
        if (accentedVowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Solicitar al usuario que ingrese una palabra
rl.question('Introduce una palabra: ', (word: string) => {
    const accentedVowelCount = countAccentedVowels(word);

    if (accentedVowelCount > 0) {
        console.log('Es probable que la palabra esté en español.');
    } else {
        console.log('Es probable que la palabra esté en inglés.');
    }

    // Cerrar la interfaz de readline
    rl.close();
});