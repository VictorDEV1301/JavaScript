// Crie um objeto chamado pessoas com as seguintes propriedades: nome, idade e profissão para três pessoas diferentes. 
// Em seguida, use o método map para criar um novo objeto chamado pessoasComSobrenome, que adiciona a propriedade sobrenome a 
// cada pessoa no objeto original. O sobrenome deve ser a última palavra no nome completo de cada pessoa.

// Por exemplo, se uma das pessoas no objeto original é { nome: 'João da Silva', idade: 30, profissao: 'Engenheiro' }, 
// o objeto correspondente no objeto pessoasComSobrenome deve ser { nome: 'João', sobrenome: 'da Silva', idade: 30, profissao: 'Engenheiro' }.

// Depois de criar o objeto pessoasComSobrenome, use o método console.log para imprimir o novo objeto no console.

function Pessoas(nome, idade, profssissao){
  this.nome = nome;
  this.idade = idade;
  this.profssissao = profssissao;
}

const Pessoa1 = new Pessoas('João Victor', 24, 'Programador');
const Pessoa2 = new Pessoas('Marta Figueiredo', 38, 'Jogadora');
const Pessoa3 = new Pessoas('Flavio da Silva', 52, 'Aposentado');

const grupoDePessoas = [Pessoa1,Pessoa2,Pessoa3];

const grupoDePessoasComSobrenome = grupoDePessoas.map(obj =>{
  let newOBJ = {...obj};
  newOBJ.sobrenome = newOBJ.nome.split(' ').slice(1).join(' ');
  newOBJ.nome = newOBJ.nome.split(' ')[0];
  return newOBJ;
});

console.log(grupoDePessoas);
console.log(grupoDePessoasComSobrenome);