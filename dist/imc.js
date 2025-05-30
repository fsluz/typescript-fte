"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imc = Imc;
function Imc(rl, done) {
    rl.question("Digite seu peso (kg): ", (pesoStr) => {
        const peso = parseFloat(pesoStr);
        rl.question("Digite sua altura (m): ", (alturaStr) => {
            const altura = parseFloat(alturaStr);
            const imc = peso / (altura * altura);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);
            if (imc < 18.5) {
                console.log("Classificação: Abaixo do peso");
            }
            else if (imc < 24.9) {
                console.log("Classificação: Peso normal");
            }
            else if (imc < 29.9) {
                console.log("Classificação: Sobrepeso");
            }
            else if (imc < 34.9) {
                console.log("Classificação: Obesidade grau I");
            }
            else if (imc < 39.9) {
                console.log("Classificação: Obesidade grau II");
            }
            else {
                console.log("Classificação: Obesidade grau III");
            }
            done();
        });
    });
}
