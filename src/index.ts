import * as readline from 'readline';
import { Controller } from "./controller";

const rl = readline.createInterface({input: process.stdin, output: process.stdout}); // cria a interface do readline input/output
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
    Controller(parseInt(answer), rl); // execute as funções dentro de controller.ts
});


