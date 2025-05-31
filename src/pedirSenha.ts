import * as readline from 'node:readline';

function perguntar(rl: readline.Interface, texto: string): Promise<string> {
    return new Promise((resolve) => rl.question(texto, resolve));
}

function validarSenha(senha: string): boolean {
    const temOitoOuMais = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    return temOitoOuMais && temMaiuscula && temMinuscula && temNumero;
}


export async function pedirSenha(rl: readline.Interface, done: () => void) {
    let senha: string;

    while (true) {
        senha = await perguntar(rl, "Digite uma senha válida: ");
        if (validarSenha(senha)) break;
        console.log("Senha inválida! Ela deve conter:\n- Pelo menos 8 caracteres\n- Pelo menos uma letra maiúscula\n- Pelo menos uma letra minúscula\n- Pelo menos um número\nTente novamente.");
    }

    console.log("Senha válida! Cadastro concluído.");

done() 

}