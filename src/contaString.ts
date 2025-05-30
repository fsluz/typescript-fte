import * as readline from 'node:readline'

export function contaString(rl: readline.Interface, done: () => void) {
    rl.question('Digite uma frase: ', (frase: string) => {
        const palavras = frase.trim().split(/\s+/);
        console.log('Número de palavras:', palavras.length);
        done();
});
}
