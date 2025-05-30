import * as readline from "readline";
import { parImpar } from "./parImpar";
import { calculadoraSimples } from "./calculadora";
import { Fahrenheit } from "./fahrenheit";
import { tabuadaSimples } from "./tabuada";


export function Controller(action: Number, rl: readline.Interface) {
    switch (action) {
         case 1:
        console.log("Outro trabalho 1");
        break;
    case 2:
        parImpar(rl);
        break;
    case 3:
        console.log("Outro trabalho 3");
        break;
    case 4:
        Fahrenheit(rl);
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
        calculadoraSimples(rl);
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
        tabuadaSimples(rl);
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