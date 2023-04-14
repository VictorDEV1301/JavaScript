// Crie um array com alguns elementos repetidos.
// Escreva uma função que recebe esse array como parâmetro.
// Dentro da função, utilize o método filter() e o método indexOf() para criar um novo array sem os elementos repetidos.
// Retorne o novo array sem os elementos repetidos.
// Teste a função com diferentes arrays e verifique se ela remove corretamente os elementos repetidos.

const arrayComRepetidos = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,7,8,8,9,9,1,2,3,4,5,6,7,8,9];
const arraySemRepetidos = arrayComRepetidos.filter((valor, indice) => arrayComRepetidos.indexOf(valor) === indice);
console.log(arraySemRepetidos);