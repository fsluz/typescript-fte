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
exports.somarDoisNumeros = somarDoisNumeros;
function perguntar(rl, texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}
function somarDoisNumeros(rl, done) {
    return __awaiter(this, void 0, void 0, function* () {
        let numero1;
        let numero2;
        while (true) {
            const entrada = yield perguntar(rl, "Digite o primeiro número inteiro: ");
            numero1 = parseInt(entrada);
            if (!isNaN(numero1))
                break;
            console.log("Entrada inválida. Tente novamente (somente números inteiros).");
        }
        while (true) {
            const entrada = yield perguntar(rl, "Digite o segundo número inteiro: ");
            numero2 = parseInt(entrada);
            if (!isNaN(numero2))
                break;
            console.log("Entrada inválida. Tente novamente (somente números inteiros).");
        }
        const soma = numero1 + numero2;
        console.log(`A soma dos dois números é: ${soma}`);
        done();
    });
}
