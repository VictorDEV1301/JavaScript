// Crie uma função que receba como parâmetro um número inteiro positivo.
// A função deve retornar uma Promise que, quando resolvida, deve retornar o resultado da soma de todos os números inteiros de 1 até o número passado como parâmetro.
// Se o parâmetro passado para a função não for um número inteiro positivo, a Promise deve ser rejeitada com uma mensagem de erro.
// Para este exercício, você pode utilizar a lógica de soma de uma sequência aritmética: Soma = (n * (n + 1)) / 2, onde "n" é o número passado como parâmetro para a função.

function sumIntegers (positiveInteger) {
  return new Promise((resolve, reject) => {
    if(positiveInteger <= 0){
      reject(new TypeError('Integer not positve;'));
    }else{
      result = (positiveInteger * (positiveInteger+1))/2;
      resolve(result);
    }
  }) 
}

sumIntegers(200).then(result => console.log(result));