"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaVogais = contaVogais;
// Classe que representa uma palavra e a contagem de vogais
class Palavra {
    constructor() {
        this.palavra = "";
        this.soma = 0;
    }
    // Método que conta quantas vogais há na palavra
    contaVogal() {
        this.soma = 0; // Zera o contador a cada chamada
        for (let ch of this.palavra.toLowerCase()) { // Converte para minúsculas e percorre cada caractere
            if ("aeiou".includes(ch)) { // Verifica se o caractere é uma vogal
                this.soma++;
            }
        }
        return this.soma;
    }
}
// Função principal
function contaVogais(rl, done) {
    const p1 = new Palavra();
    rl.question("Digite uma palavra: ", (resposta) => {
        p1.palavra = resposta;
        const total = p1.contaVogal();
        console.log("Total de vogais encontradas: " + total);
        done();
    });
}
