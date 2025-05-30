"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fahrenheit = Fahrenheit;
function Fahrenheit(rl) {
    rl.question('Digite a temperatura em Celsius: ', (input) => {
        const celsius = parseFloat(input);
        if (isNaN(celsius)) {
            console.log('Valor inválido.');
        }
        else {
            const fahrenheit = (celsius * 9 / 5) + 32;
            console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);
        }
        rl.close();
    });
}
