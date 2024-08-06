function validateCreditCard(cardNumber: string): boolean {
    // Convertir el número de tarjeta a un array de dígitos
    const digits = cardNumber.split('').map(Number);

    // Implementar el algoritmo de Luhn
    const sum = digits.reverse().map((digit, index) => {
        if (index % 2 === 1) { // Segundo dígito desde la derecha (índices impares después de la reversión)
            const doubled = digit * 2;
            return doubled > 9 ? doubled - 9 : doubled; // Sumar los dígitos si es un número de dos dígitos
        }
        return digit;
    }).reduce((acc, curr) => acc + curr, 0); // Sumar todos los dígitos

    // Verificar si la suma es divisible por 10
    return sum % 10 === 0;
}

// Probar la función con varios números de tarjetas de crédito de ejemplo
const testCardNumbers = [
    "4539578763621486", // válido
    "1234567812345670", // no válido
    "4485275742308327", // válido
    "5105105105105100", // válido
    "4111111111111111", // válido
    "4012888888881881", // válido
    "4222222222222"    // válido
];

testCardNumbers.forEach(cardNumber => {
    const isValid = validateCreditCard(cardNumber);
    console.log(`Card Number: ${cardNumber} is ${isValid ? "Valid" : "Invalid"}`);
});