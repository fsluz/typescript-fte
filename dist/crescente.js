"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crescente = Crescente;
function Crescente(done) {
    const numeros = [5, 2, 9, 1, 3];
    numeros.sort((a, b) => a - b); // Ordena em ordem crescente
    console.log("Array ordenado:");
    for (const num of numeros) {
        console.log(num);
    }
    done();
}
