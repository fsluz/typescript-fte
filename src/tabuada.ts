import * as readline from 'readline';

export function tabuadaSimples(rl: readline.Interface, done: () => void) {
  rl.question('Digite um número para ver a tabuada: ', (input) => {
    const numero = parseInt(input);

    if (!isNaN(numero)) {
      console.log(`Tabuada do ${numero}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
      }
    } else {
      console.log('Por favor, digite um número válido.');
    }
    
    done();
  });
}
