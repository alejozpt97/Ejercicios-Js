function cruzarMatrices(A: number[][], B: number[][]): string[][] {
    const result: string[][] = [];
    const numRows = A.length;
    const numCols = A[0].length;

    for (let i = 0; i < numRows; i++) {
        const row: string[] = [];
        for (let j = 0; j < numCols; j++) {
            const a = A[i][j];
            const b = B[i][j];

            console.log(`Comparando A[${i}][${j}] = ${a} con B[${i}][${j}] = ${b}`);

            if (a % 2 !== 0 && b % 2 === 0) {
                row.push('X');
            } else if ((a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)) {
                row.push('O');
            } else {
                row.push('-');
            }
        }
        result.push(row);
    }

    return result;
}

// Ejemplo de uso
let A = [[1, 2], [3, 4]];
let B = [[2, 3], [4, 5]];
console.log(cruzarMatrices(A, B)); // Debe devolver [['X', '-'], ['-', 'O']]
