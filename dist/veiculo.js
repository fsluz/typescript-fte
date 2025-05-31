"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = Veiculo;
// Classe Carro que implementa a interface Veiculo
class Carro {
    // Implementação do método acelerar
    acelerar() {
        console.log("O veículo está acelerando.");
    }
    // Implementação do método frear
    frear() {
        console.log("O veículo está freando.");
    }
}
// Função principal
function Veiculo(done) {
    const c1 = new Carro(); // Criando um objeto do tipo Veiculo que instancia Carro
    c1.acelerar();
    c1.frear();
    done();
}
