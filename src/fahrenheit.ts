import * as readline from 'readline';

export function Fahrenheit(rl: readline.Interface, done: () => void) {
  rl.question('Digite a temperatura em Celsius: ', (input) => {
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
      console.log('Valor inválido.');
    } else {
      const fahrenheit = (celsius * 9 / 5) + 32;
      console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);
    }

    done()
  });
}
