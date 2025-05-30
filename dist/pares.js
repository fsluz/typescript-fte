"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Par = Par;
// Faz uma pergunta ao usuário
function Par(rl, done) {
    rl.question('Digite um número final: ', (input) => {
        const final = parseInt(input);
        if (isNaN(final) || final < 1) {
            console.log('Por favor, digite um número válido maior que 0.');
        }
        else {
            console.log(`Números pares de 1 até ${final}:`);
            for (let i = 1; i <= final; i++) {
                if (i % 2 === 0) {
                    console.log(i);
                }
            }
        }
        done();
    });
}
