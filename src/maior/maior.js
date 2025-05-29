"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
function maiorMenor() {
    var input = inquirer_1.default.prompt([{ name: 'valor', type: 'input', 'message': 'Digite um valor' }]);
    var value = input.then(function (answer) {
        var num = answer !== null ? answer : NaN;
        var maiorMenor = (num === 0 ? "O número é par" : "O número é impar");
        console.log(maiorMenor);
    });
    if (isNaN(Number(value))) {
        console.log("Digite valores válidos!");
        return;
    }
}
console.log(maiorMenor());
