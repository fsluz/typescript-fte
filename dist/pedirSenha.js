"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedirSenha = pedirSenha;
function perguntar(rl, texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}
function validarSenha(senha) {
    const temOitoOuMais = senha.length >= 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    return temOitoOuMais && temMaiuscula && temMinuscula && temNumero;
}
function pedirSenha(rl, done) {
    return __awaiter(this, void 0, void 0, function* () {
        let senha;
        while (true) {
            senha = yield perguntar(rl, "Digite uma senha válida: ");
            if (validarSenha(senha))
                break;
            console.log("Senha inválida! Ela deve conter:\n- Pelo menos 8 caracteres\n- Pelo menos uma letra maiúscula\n- Pelo menos uma letra minúscula\n- Pelo menos um número\nTente novamente.");
        }
        console.log("Senha válida! Cadastro concluído.");
        done();
    });
}
