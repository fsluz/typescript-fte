"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadoraSimples = calculadoraSimples;
function calculadoraSimples(rl) {
    rl.question('Digite o primeiro número: ', (valor1Input) => {
        rl.question('Digite o segundo número: ', (valor2Input) => {
            rl.question('Digite a operação desejada (+, -, *, /): ', (operacao) => {
                const num1 = parseFloat(valor1Input);
                const num2 = parseFloat(valor2Input);
                if (isNaN(num1) || isNaN(num2)) {
                    console.log('Erro: Um dos valores não é um número válido.');
                    rl.close();
                    return;
                }
                let resultado;
                switch (operacao) {
                    case '+':
                        resultado = num1 + num2;
                        console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                        break;
                    case '-':
                        resultado = num1 - num2;
                        console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                        break;
                    case '*':
                        resultado = num1 * num2;
                        console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
                        break;
                    case '/':
                        if (num2 !== 0) {
                            resultado = num1 / num2;
                            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                        }
                        else {
                            console.log('Erro: divisão por zero não é permitida.');
                        }
                        break;
                    default:
                        console.log('Operação inválida. Use +, -, * ou /.');
                }
                rl.close();
            });
        });
    });
}
