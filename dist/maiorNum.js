"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maiorNum = maiorNum;
function maiorNum(done) {
    const valor = [20, 30, 40, 50, 60];
    let maior = 0;
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] > valor[0]) {
            maior = Number(valor[i]);
        }
    }
    console.log(valor);
    console.log(maior);
    done();
}
