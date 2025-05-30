export function Crescente(done: () => void) {
    const numeros: number[] = [5, 2, 9, 1, 3];
    
    numeros.sort((a, b) => a - b); // Ordena em ordem crescente
    
    console.log("Array ordenado:");
    for (const num of numeros) {
        console.log(num);
    }
    done();
}