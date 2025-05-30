"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaString = contaString;
function contaString(rl, done) {
    rl.question('Digite uma frase: ', (frase) => {
        const palavras = frase.trim().split(/\s+/);
        console.log('Número de palavras:', palavras.length);
        done();
    });
}
