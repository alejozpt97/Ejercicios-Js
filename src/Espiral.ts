function dibujarEspiral(lado: number): void {
    const matriz = Array.from({ length: lado }, () => Array(lado).fill(' '));

    let top = 0;
    let bottom = lado - 1;
    let left = 0;
    let right = lado - 1;
    let direccion = 0;

    while (top <= bottom && left <= right) {
        switch (direccion) {
            case 0: // derecha
                for (let i = left; i <= right; i++) {
                    if (i === right) {
                        matriz[top][i] = top === 0 ? '╗' : '╗';
                    } else {
                        matriz[top][i] = '═';
                    }
                }
                top++;
                break;
            case 1: // abajo
                for (let i = top; i <= bottom; i++) {
                    if (i === bottom) {
                        matriz[i][right] = right === lado - 1 ? '╝' : '╝';
                    } else {
                        matriz[i][right] = '║';
                    }
                }
                right--;
                break;
            case 2: // izquierda
                for (let i = right; i >= left; i--) {
                    if (i === left) {
                        matriz[bottom][i] = bottom === lado - 1 ? '╚' : '╚';
                    } else {
                        matriz[bottom][i] = '═';
                    }
                }
                bottom--;
                break;
            case 3: // arriba
                for (let i = bottom; i >= top; i--) {
                    if (i === top) {
                        matriz[i][left] = left === 0 ? '╔' : '╔';
                    } else {
                        matriz[i][left] = '║';
                    }
                }
                left++;
                break;
        }
        direccion = (direccion + 1) % 4;
    }

    // Imprimir la matriz
    for (const fila of matriz) {
        console.log(fila.join(''));
    }
}

// Ejemplo de uso
dibujarEspiral(5);