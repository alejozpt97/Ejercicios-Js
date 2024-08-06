function evaluarRPN(expresion: string): number {
    const stack: number[] = [];
    const tokens = expresion.split(' ');

    for (const token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token));
        } else {
            const b = stack.pop()!;
            const a = stack.pop()!;

            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    if (b === 0) {
                        return Infinity;
                    }
                    stack.push(Math.trunc(a / b)); // División entera
                    break;
                default:
                    throw new Error(`Operador desconocido: ${token}`);
            }
        }
    }

    return stack.pop()!;
}

// Ejemplos de uso
console.log(evaluarRPN("3 4 +")); // 7
console.log(evaluarRPN("5 3 4 + *")); // 35
console.log(evaluarRPN("5 1 2 + 4 * + 3 -")); // 14