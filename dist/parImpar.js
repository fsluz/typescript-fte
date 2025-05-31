"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parImpar = parImpar;
function parImpar(rl, done) {
    rl.question("Digite um valor para verificar se é par ou impar: ", (num) => {
        // converte o num para valores em int/number
        const numInt = parseInt(num);
        // verifica que se é not a number, se sim, não é valido!
        if (Number.isNaN(numInt)) {
            console.log("Digite algum valor válido!");
            return;
        }
        // realiza o resto, caso seja 0 é par, senão impar
        const resto = numInt % 2;
        console.log(resto == 0 ? "O número é par" : "O número é impar");
        // fecha a questão
        done();
    });
}
