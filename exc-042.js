//Criando uma pessoa em factory function, constructor function, e classe
function criaPessoa(nome, idade){
  const criaPessoaPrototye = {
    falarNome: function(){
      console.log(`Oi meu nome é ${this.nome}`);
    }
  }
  return Object.create(criaPessoaPrototye,{
    nome:{
      value: nome,
      enumerable: true
    },
    idade: {
      value: idade,
      enumerable: true
    }
  })
}

const pessoaComFactory = criaPessoa('Pessoa1',1);
console.log(pessoaComFactory);
pessoaComFactory.falarNome();

console.log();

function PessoaF(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

PessoaF.prototype = {
  falarNome: function(){
    console.log(`Oi meu nome é ${this.nome}`);
  }
}

const pessoaComConstructor = new PessoaF('Pessoa2',2);
console.log(pessoaComConstructor);
pessoaComConstructor.falarNome();

console.log()

class PessoaC{
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
  falarNome(){
    console.log(`Oi meu nome é ${this.nome}`);
  }
}

const pessoaComClass = new PessoaC('Pessoa3',3);
console.log(pessoaComClass);
pessoaComClass.falarNome();