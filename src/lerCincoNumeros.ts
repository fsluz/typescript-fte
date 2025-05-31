import * as readline from 'node:readline';

function perguntar(rl: readline.Interface, texto: string): Promise<string> {
    return new Promise((resolve) => rl.question(texto, resolve));
}

function validarNumero(entrada: string): number | null {
    const numero = parseFloat(entrada);
    return isNaN(numero) ? null : numero;
}

export async function lerCincoNumeros(rl: readline.Interface, done: () => void) {
    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        let numeroValido: number | null = null;

        while (numeroValido === null) {
            const entrada = await perguntar(rl, `Digite o número ${i + 1}: `);
            numeroValido = validarNumero(entrada);
            if (numeroValido === null) {
                console.log("Entrada inválida. Tente novamente.");
            }
        }
        numeros.push(numeroValido);
    }

    console.log("Os números digitados foram:");
    numeros.forEach((num, index) => {
        console.log(`Número ${index + 1}: ${num}`);
    });

    done();
}

export function imprimirNumeros(rl: readline.Interface, done: () => void) {
    lerCincoNumeros(rl, () => {
        done();
    });
}
