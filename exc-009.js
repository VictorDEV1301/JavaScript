// Crie uma função chamada somaImpares que recebe um array de números inteiros como argumento e retorna a soma de todos os números ímpares contidos no array.

// Por exemplo, se o array recebido for [1, 2, 3, 4, 5], a função deve retornar 9, que é a soma dos números ímpares 1, 3 e 5.

function somaImpares(arrayDeInteiros) {
  let soma = 0;
  for(let numero of arrayDeInteiros) if (numero % 2 !== 0) soma += numero;
  return soma;
}

console.log(somaImpares([1,2,3,4,5]));