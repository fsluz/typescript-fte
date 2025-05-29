import inquirer from "inquirer";
 function maiorMenor() {
    const input = inquirer.prompt([{name: 'valor', type: 'input', 'message': 'Digite um valor'}]);

    const value =  input.then((answer) => {
        const num = answer !== null ? answer : NaN
        const maiorMenor = (num === 0 ? "O número é par" : "O número é impar");
        console.log(maiorMenor)
    });

 
}

console.log(maiorMenor())