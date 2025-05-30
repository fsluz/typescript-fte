"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
const parImpar_1 = require("./parImpar");
const calculadora_1 = require("./calculadora");
const fahrenheit_1 = require("./fahrenheit");
const tabuada_1 = require("./tabuada");
function Controller(action, rl) {
    switch (action) {
        case 1:
            console.log("Outro trabalho 1");
            break;
        case 2:
            (0, parImpar_1.parImpar)(rl);
            break;
        case 3:
            console.log("Outro trabalho 3");
            break;
        case 4:
            (0, fahrenheit_1.Fahrenheit)(rl);
            break;
        case 5:
            console.log("Outro trabalho 5");
            break;
        case 6:
            console.log("Outro trabalho 6");
            break;
        case 7:
            console.log("Outro trabalho 7");
            break;
        case 8:
            console.log("Outro trabalho 8");
            break;
        case 9:
            (0, calculadora_1.calculadoraSimples)(rl);
            break;
        case 10:
            console.log("Outro trabalho 10");
            break;
        case 11:
            console.log("Outro trabalho 11");
            break;
        case 12:
            console.log("Outro trabalho 12");
            break;
        case 13:
            console.log("Outro trabalho 13");
            break;
        case 14:
            (0, tabuada_1.tabuadaSimples)(rl);
            break;
        case 15:
            console.log("Outro trabalho 15");
            break;
        case 16:
            console.log("Outro trabalho 16");
            break;
        case 17:
            console.log("Outro trabalho 17");
            break;
        case 18:
            console.log("Outro trabalho 18");
            break;
        default:
            console.log("Opção inválida");
    }
}
