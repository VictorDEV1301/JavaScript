// Crie uma função chamada calculaMediaAlunos que recebe um array de objetos que representam alunos, com as propriedades nome e notas, 
// onde notas é um array de números que representam as notas que o aluno tirou em uma determinada disciplina. A função deve usar a função forEach para percorrer o 
// array de alunos e calcular a média das notas de cada aluno.

// A média de cada aluno deve ser adicionada como uma nova propriedade ao objeto correspondente, com o nome media. Ao final da função, ela deve 
// retornar um novo array de objetos com as informações originais dos alunos (nome e notas) e a média calculada.

function calculaMediaAlunos(array) {
  array.forEach(element => element.media = (element.notas.reduce((ac, valor)=>ac += valor)/element.notas.length).toFixed(2));
}

const alunos = [
  { nome: 'João', notas: [7, 8, 9] },
  { nome: 'Maria', notas: [5, 6, 7] },
  { nome: 'Pedro', notas: [9, 9, 10] }
];

calculaMediaAlunos(alunos);
console.log(alunos);