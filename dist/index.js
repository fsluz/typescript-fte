"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const controller_1 = require("./controller");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); // cria a interface do readline input/output
function showMenu() {
    rl.question("=== MENU DE EXERCÍCIOS ===\n\
        1 - Soma de dois números\n\
        2 - Verificar par ou ímpar\n\
        3 - Calcular média de três notas\n\
        4 - Converter Celsius para Fahrenheit\n\
        5 - Exibir números pares de 1 a 20\n\
        6 - Ler 5 números e armazenar em array\n\
        7 - Encontrar maior número em um array\n\
        8 - Contar vogais em uma string\n\
        9 - Calculadora simples\n\
        10 - Ordenar array em ordem crescente\n\
        11 - Classe Pessoa\n\
        12 - Classe Aluno\n\
        13 - Classe Carro\n\
        14 - Tabuada\n\
        15 - Calculadora de IMC\n\
        16 - Validar senha\n\
        17 - Jogo de adivinhação\n\
        18 - Contar palavras em uma string\n\
        0 - Sair\n\n\
        Escolha uma opção (0-18): ", (answer) => {
        const option = parseInt(answer);
        if (option === 0) {
            console.log("Saindo...");
            rl.close();
            return;
        }
        (0, controller_1.Controller)(option, rl, () => { showMenu(); }); // execute as funções dentro de controller.ts
    });
}
showMenu();
