function esViernes13(mes: number, año: number): boolean {
    // JavaScript Date months are zero-indexed (0 = January, 11 = December)
    const fecha = new Date(año, mes - 1, 13);
    // getDay() returns the day of the week (0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday)
    return fecha.getDay() === 5; // 5 represents Friday
}

// Ejemplos de uso
console.log(esViernes13(10, 2024)); // true
console.log(esViernes13(12, 2024)); // false