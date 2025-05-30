import * as readline from 'readline'

export function maiorNum(done: () => void) {
    const valor : Number[] = [20, 30, 40,50, 60];
    let maior = 0;

    for(let i = 0; i < valor.length; i++) {
        if(valor[i] > valor[0]) {
            maior = Number(valor[i]);
        }
    }
    
    console.log(maior)
    done();
}
