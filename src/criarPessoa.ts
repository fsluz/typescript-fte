import * as readline from 'node:readline';

function perguntar(rl: readline.Interface, texto: string): Promise<string> {
    return new Promise((resolve) => rl.question(texto, resolve));
}

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}

export async function criarPessoa(rl: readline.Interface, done: () => void) {
    const nome = await perguntar(rl, "Digite o nome da pessoa: ");

    let idade: number;

    while (true) {
        const entrada = await perguntar(rl, "Digite a idade da pessoa: ");
        const idadeParse = parseInt(entrada);
        if (!isNaN(idadeParse) && idadeParse > 0) {
            idade = idadeParse;
            break;
        }
        console.log("Idade inválida. Tente novamente (somente números maiores que zero).");
    }

    const pessoa = new Pessoa(nome, idade);
    console.log("\nDados da pessoa:");
    pessoa.exibirDados();

    done();
}