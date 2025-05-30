"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = Controller;
const parImpar_1 = require("./parImpar");
const calculadora_1 = require("./calculadora");
const fahrenheit_1 = require("./fahrenheit");
const tabuada_1 = require("./tabuada");
const maiorNum_1 = require("./maiorNum");
const aluno_1 = require("./aluno");
const advinhacao_1 = require("./advinhacao");
function Controller(action, rl, done) {
    switch (action) {
        case 1:
            console.log("Outro trabalho 1");
            break;
        case 2:
            (0, parImpar_1.parImpar)(rl, done);
            break;
        case 3:
            console.log("Outro trabalho 3");
            break;
        case 4:
            (0, fahrenheit_1.Fahrenheit)(rl, done);
            break;
        case 5:
            console.log("Outro trabalho 5");
            break;
        case 6:
            console.log("Outro trabalho 6");
            break;
        case 7:
            (0, maiorNum_1.maiorNum)(done);
            break;
        case 8:
            console.log("Outro trabalho 8");
            break;
        case 9:
            (0, calculadora_1.calculadoraSimples)(rl, done);
            break;
        case 10:
            console.log("Outro trabalho 10");
            break;
        case 11:
            console.log("Outro trabalho 11");
            break;
        case 12:
            const aluno = new aluno_1.Aluno("Mariana", 220, "Análise e Desenvolvimento");
            console.log(aluno.getAluno());
            done();
            break;
        case 13:
            console.log("Outro trabalho 13");
            break;
        case 14:
            (0, tabuada_1.tabuadaSimples)(rl, done);
            break;
        case 15:
            console.log("Outro trabalho 15");
            break;
        case 16:
            console.log("Outro trabalho 16");
            break;
        case 17:
            (0, advinhacao_1.perguntarPalpite)(rl, done);
            break;
        case 18:
            console.log("Outro trabalho 18");
            break;
        default:
            console.log("Opção inválida");
    }
}
