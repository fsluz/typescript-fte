interface Veiculo {
  acelerar(): void;  // Método para acelerar
  frear(): void;     // Método para frear
}

// Classe Carro que implementa a interface Veiculo
class Carro implements Veiculo {
  
  // Implementação do método acelerar
  acelerar(): void {
    console.log("O veículo está acelerando.");
  }

  // Implementação do método frear
  frear(): void {
    console.log("O veículo está freando.");
  }
}

// Função principal
export function Veiculo() {
  const c1: Veiculo = new Carro();  // Criando um objeto do tipo Veiculo que instancia Carro

  c1.acelerar();  
  c1.frear();     
}
