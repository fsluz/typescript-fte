"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerCincoNumeros = lerCincoNumeros;
exports.imprimirNumeros = imprimirNumeros;
function perguntar(rl, texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}
function validarNumero(entrada) {
    const numero = parseFloat(entrada);
    return isNaN(numero) ? null : numero;
}
function lerCincoNumeros(rl, done) {
    return __awaiter(this, void 0, void 0, function* () {
        const numeros = [];
        for (let i = 0; i < 5; i++) {
            let numeroValido = null;
            while (numeroValido === null) {
                const entrada = yield perguntar(rl, `Digite o número ${i + 1}: `);
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
    });
}
function imprimirNumeros(rl, done) {
    lerCincoNumeros(rl, () => {
        done();
    });
}
