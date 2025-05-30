"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    constructor(nome, matricula, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }
    getAluno() {
        return `Nome aluno(a): ${this.nome}, matricula: ${this.matricula} e o curso matriculado: ${this.curso}`;
    }
}
exports.Aluno = Aluno;
;
