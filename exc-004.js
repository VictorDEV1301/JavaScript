// Crie uma função construtora chamada Aluno que tenha os seguintes atributos:
// nome: string
// idade: número
// turma: string
// notas: array de números
// A função construtora deve ter um método chamado calculaMedia que calcula a média das notas do aluno.

function Aluno (nome, idade, turma, notas){
  this.nome = nome;
  this.idade = idade;
  this.turma = turma;
  /*Como existe o uso da arrow function
  não é necessário utilziar o this*/
  this.media = ()=>{
    let media = 0;
    for(let i in notas) media += notas[i];
    return (media/notas.length).toFixed(2);
  }
}

const aluno1 = new Aluno('João','24','GPT',[8,9,8]);
console.log(aluno1.media());