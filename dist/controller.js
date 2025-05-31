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
const pares_1 = require("./pares");
const crescente_1 = require("./crescente");
const imc_1 = require("./imc");
const contaString_1 = require("./contaString");
const media_1 = require("./media");
const veiculo_1 = require("./veiculo");
const vogais_1 = require("./vogais");
const criarPessoa_1 = require("./criarPessoa");
const lerCincoNumeros_1 = require("./lerCincoNumeros");
const somarDoisNumeros_1 = require("./somarDoisNumeros");
const pedirSenha_1 = require("./pedirSenha");
function Controller(action, rl, done) {
    switch (action) {
        case 1:
            (0, somarDoisNumeros_1.somarDoisNumeros)(rl, done);
            break;
        case 2:
            (0, parImpar_1.parImpar)(rl, done);
            break;
        case 3:
            (0, media_1.mediaNum)(rl, done);
            break;
        case 4:
            (0, fahrenheit_1.Fahrenheit)(rl, done);
            break;
        case 5:
            (0, pares_1.Par)(rl, done);
            break;
        case 6:
            (0, lerCincoNumeros_1.lerCincoNumeros)(rl, done);
            break;
        case 7:
            (0, maiorNum_1.maiorNum)(done);
            break;
        case 8:
            (0, vogais_1.contaVogais)(rl, done);
            break;
        case 9:
            (0, calculadora_1.calculadoraSimples)(rl, done);
            break;
        case 10:
            (0, crescente_1.Crescente)(done);
            break;
        case 11:
            (0, criarPessoa_1.criarPessoa)(rl, done);
            break;
        case 12:
            const aluno = new aluno_1.Aluno("Mariana", 220, "Análise e Desenvolvimento");
            console.log(aluno.getAluno());
            done();
            break;
        case 13:
            (0, veiculo_1.Veiculo)(done);
            break;
        case 14:
            (0, tabuada_1.tabuadaSimples)(rl, done);
            break;
        case 15:
            (0, imc_1.Imc)(rl, done);
            break;
        case 16:
            (0, pedirSenha_1.pedirSenha)(rl, done);
            break;
        case 17:
            (0, advinhacao_1.perguntarPalpite)(rl, done);
            break;
        case 18:
            (0, contaString_1.contaString)(rl, done);
            break;
        default:
            console.log("Opção inválida");
            done();
    }
}
