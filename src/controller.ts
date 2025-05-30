import * as readline from "readline";
import { parImpar } from "./parImpar";
import { calculadoraSimples } from "./calculadora";
import { Fahrenheit } from "./fahrenheit";
import { tabuadaSimples } from "./tabuada";
import { maiorNum } from "./maiorNum";
import { Aluno } from "./aluno";
import { perguntarPalpite } from "./advinhacao";
import { Par } from "./pares";
import { Crescente } from "./crescente";
import { Imc } from "./imc";
import { contaString } from "./contaString";

export function Controller(action: Number, rl: readline.Interface, done: () => void) {
    switch (action) {
         case 1:
        console.log("Outro trabalho 1");
        break;
    case 2:
        parImpar(rl, done);
        break;
    case 3:
        console.log("Outro trabalho 3");
        break;
    case 4:
        Fahrenheit(rl, done);
        break;
    case 5:
        Par(rl, done);
        break;
    case 6:
        console.log("Outro trabalho 6");
        break;
    case 7:
        maiorNum(done);
        break;
    case 8:
        console.log("Outro trabalho 8");
        break;
    case 9:
        calculadoraSimples(rl, done);
        break;
    case 10:
        Crescente(done);
        break;
    case 11:
        console.log("Outro trabalho 11");
        break;
    case 12:
        const aluno = new Aluno("Mariana", 220, "Análise e Desenvolvimento");
        console.log(aluno.getAluno());
        done()
        break;
    case 13:
        console.log("Outro trabalho 13");
        break;
    case 14:
        tabuadaSimples(rl, done);
        break;
    case 15:
        Imc(rl, done);
        break;
    case 16:
        console.log("Outro trabalho 16");
        break;
    case 17:
        perguntarPalpite(rl, done);
        break;
    case 18:
        contaString(rl, done);
        break;
    default:
        console.log("Opção inválida");
        done();
    }
}