// Crie uma função construtora chamada "Pessoa" que tenha as seguintes propriedades:

// nome: uma string com o nome da pessoa;
// idade: um número inteiro com a idade da pessoa;
// profissao: uma string com a profissão da pessoa.
// A função construtora Pessoa também deve ter um método chamado "apresentar" que retorna uma string com o nome, a idade e a profissão da pessoa.

// Crie duas funções construtoras que herdam de Pessoa, chamadas "Aluno" e "Professor". Ambas devem ter uma propriedade adicional:

// Aluno deve ter uma propriedade "curso", que é uma string com o nome do curso que o aluno está matriculado;
// Professor deve ter uma propriedade "disciplina", que é uma string com o nome da disciplina que o professor leciona.
// Ambas as funções construtoras também devem ter um método chamado "apresentar" que sobrescreve o método da classe Pessoa. Este método deve retornar uma 
// string com o nome, a idade, a profissão e a propriedade adicional de cada classe (no caso de Aluno, o nome do curso; no caso de Professor, o nome da disciplina).

function Pessoa(nome, idade, profissao) {
  this.nome = nome;
  this.idade = idade;
  this.profissao = profissao;
}

Pessoa.prototype.apresentar = function () {
    return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.profissao}`;
  }

function Aluno(nome, idade, profissao, curso) {
  Pessoa.call(this, nome, idade, profissao);
  this.curso = curso;
}

Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;
Aluno.prototype.apresentar = function () {
  return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.profissao} e estudo o curso de ${this.curso}`;
}

function Professor(nome, idade, profissao, disciplina) {
  Pessoa.call(this, nome, idade, profissao);
  this.disciplina = disciplina;
}

Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.apresentar = function () {
  return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.profissao} e ministro a disciplina de ${this.disciplina}`;
}

const Pessoa1 = new Pessoa('Pessoa1',20,'Pedreiro');
console.log(Pessoa1.apresentar());