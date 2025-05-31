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
import { mediaNum } from "./media";
import { Veiculo } from "./veiculo";
import { contaVogais } from "./vogais";
import { criarPessoa } from "./criarPessoa";
import { lerCincoNumeros } from "./lerCincoNumeros";
import { somarDoisNumeros } from "./somarDoisNumeros";
import { pedirSenha } from "./pedirSenha";



export function Controller(action: Number, rl: readline.Interface, done: () => void) {
    switch (action) {
         case 1:
        somarDoisNumeros(rl, done);
        break;
    case 2:
        parImpar(rl, done);
        break;
    case 3:
        mediaNum(rl, done);
        break;
    case 4:
        Fahrenheit(rl, done);
        break;
    case 5:
        Par(rl, done);
        break;
    case 6:
        lerCincoNumeros(rl, done);
        break;
    case 7:
        maiorNum(done);
        break;
    case 8:
        contaVogais(rl, done);
        break;
    case 9:
        calculadoraSimples(rl, done);
        break;
    case 10:
        Crescente(done);
        break;
    case 11:
        criarPessoa(rl, done);
        break;
    case 12:
        const aluno = new Aluno("Mariana", 220, "Análise e Desenvolvimento");
        console.log(aluno.getAluno());
        done()
        break;
    case 13:
        Veiculo(done);
        break;
    case 14:
        tabuadaSimples(rl, done);
        break;
    case 15:
        Imc(rl, done);
        break;
    case 16:
        pedirSenha(rl,done);
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
