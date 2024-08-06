// Función para comprobar si un número es primo
function esPrimo(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Función para comprobar si un número es parte de la secuencia de Fibonacci
function esFibonacci(num: number): boolean {
    if (num === 0 || num === 1) return true;
    let a = 0, b = 1, c = 1;
    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }
    return c === num;
}

// Función para comprobar si un número es par
function esPar(num: number): boolean {
    return num % 2 === 0;
}

// Función principal para analizar el número
function analizarNumero(num: number): string {
    const primo = esPrimo(num) ? "es primo" : "no es primo";
    const fibonacci = esFibonacci(num) ? "es fibonacci" : "no es fibonacci";
    const par = esPar(num) ? "es par" : "es impar";

    return `${num} ${primo}, ${fibonacci} y ${par}`;
}

// Ejemplos de uso
console.log(analizarNumero(2));  // "2 es primo, es fibonacci y es par"
console.log(analizarNumero(7));  // "7 es primo, no es fibonacci y es impar"
console.log(analizarNumero(8));  // "8 no es primo, es fibonacci y es par"