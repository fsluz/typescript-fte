import * as readline from 'readline';
import { Controller } from "./controller";

const rl = readline.createInterface({input: process.stdin, output: process.stdout}); // cria a interface do readline input/output
rl.question("1 - Primeira opção: \n2 - parImpar: \n", (answer) => {
    Controller(parseInt(answer), rl); // execute as funções dentro de controller.ts
});


