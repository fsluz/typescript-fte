export class Aluno {
    public nome: string;
    private matricula: number;
    public curso: string;
    
    public constructor(nome: string, matricula: number, curso: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
    }

    public getAluno() {
        return `Nome aluno(a): ${this.nome}, matricula: ${this.matricula} e o curso matriculado: ${this.curso}`
    }

};