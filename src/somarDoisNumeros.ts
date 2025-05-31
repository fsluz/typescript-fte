import * as readline from 'node:readline';

function perguntar(rl: readline.Interface, texto: string): Promise<string> {
    return new Promise((resolve) => rl.question(texto, resolve));
}

export async function somarDoisNumeros(rl: readline.Interface, done: () => void) {
    let numero1: number;
    let numero2: number;

    while (true) {
        const entrada = await perguntar(rl, "Digite o primeiro número inteiro: ");
        numero1 = parseInt(entrada);
        if (!isNaN(numero1)) break;
        console.log("Entrada inválida. Tente novamente (somente números inteiros).");
    }

    while (true) {
        const entrada = await perguntar(rl, "Digite o segundo número inteiro: ");
        numero2 = parseInt(entrada);
        if (!isNaN(numero2)) break;
        console.log("Entrada inválida. Tente novamente (somente números inteiros).");
    }

    const soma = numero1 + numero2;
    console.log(`A soma dos dois números é: ${soma}`);

    done();
}
