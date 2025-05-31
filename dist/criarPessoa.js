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
exports.criarPessoa = criarPessoa;
function perguntar(rl, texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}
function criarPessoa(rl, done) {
    return __awaiter(this, void 0, void 0, function* () {
        const nome = yield perguntar(rl, "Digite o nome da pessoa: ");
        let idade;
        while (true) {
            const entrada = yield perguntar(rl, "Digite a idade da pessoa: ");
            const idadeParse = parseInt(entrada);
            if (!isNaN(idadeParse) && idadeParse > 0) {
                idade = idadeParse;
                break;
            }
            console.log("Idade inválida. Tente novamente (somente números maiores que zero).");
        }
        const pessoa = new Pessoa(nome, idade);
        console.log("\nDados da pessoa:");
        pessoa.exibirDados();
        done();
    });
}
