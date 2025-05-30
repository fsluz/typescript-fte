import * as readline from 'readline';

const numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

export function perguntarPalpite(rl: readline.Interface, done: () => void) {
    rl.question("Digite seu palpite: ", (input) => {
        const palpite = parseInt(input);
        tentativas++;

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            perguntarPalpite(rl, done);
        } else if (palpite < numeroSorteado) {
            console.log("O número é maior. Tente novamente.");
            perguntarPalpite(rl, done);
        } else if (palpite > numeroSorteado) {
            console.log("O número é menor. Tente novamente.");
            perguntarPalpite(rl, done);
        } else {
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
            done(); // só chama done quando o jogo termina
        }
    });
}
