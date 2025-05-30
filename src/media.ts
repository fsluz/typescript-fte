import readline from 'readline';
// Classe que representa três valores e calcula a média
export class Media {
  a: number;
  b: number;
  c: number;

  constructor() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
  }

  media(): number {
    return (this.a + this.b + this.c) / 3;
  }
}

export function mediaNum(rl: readline.Interface, done: () => void) {
    const c1 = new Media();
    rl.question("Digite o primeiro valor: ", (resposta1) => {
        c1.a = parseFloat(resposta1);
        
        rl.question("Digite o segundo valor: ", (resposta2) => {
            c1.b = parseFloat(resposta2);
            
            rl.question("Digite o terceiro valor: ", (resposta3) => {
                c1.c = parseFloat(resposta3);
                
                console.log("A média é: " + c1.media().toFixed(1));
                done()
            });
        });
    });
}