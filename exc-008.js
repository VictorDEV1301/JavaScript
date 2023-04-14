// Crie uma função chamada calculadora que recebe dois parâmetros numéricos, a e b.
// Essa função deve retornar um objeto com quatro métodos: soma, subtrai, multiplica e divide.
// Cada um desses métodos deve ser uma função que recebe um único parâmetro numérico c e retorna o resultado da operação 
// correspondente(a + b + c para soma, a - b - c para subtrai, a * b * c para multiplica e a / b / c para divide).

function calculadora(numA, numB){
  return {
    soma(numC) {
      return numA+numB+numC;
    },
    subtrai(numC) {
      return numA-numB-numC;
    },
    multiplica(numC) {
      return numA*numB*numC;
    },
    divide(numC) {
      return numA/numB/numC;
    }
  }
}

const s1 = calculadora(5,7);
console.log(s1.soma(8));