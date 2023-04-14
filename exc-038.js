// Crie uma classe Pessoa que tenha os seguintes atributos:

// nome
// idade
// sexo
// A classe deve ter um método construtor que receba os três atributos e defina as propriedades correspondentes.

// Em seguida, crie uma classe Funcionario que herde da classe Pessoa. A classe Funcionario deve ter os seguintes atributos adicionais:

// setor
// trabalhando (um booleano que indica se o funcionário está trabalhando no momento)
// A classe Funcionario deve ter um método construtor que receba os atributos da classe Pessoa e os atributos adicionais da classe Funcionario, e defina as propriedades correspondentes.

// A classe Funcionario deve ter os seguintes métodos:

// mudarTrabalho: que recebe como parâmetro o nome do novo setor e muda o valor da propriedade setor para o novo valor.
// iniciarTrabalho: que muda o valor da propriedade trabalhando para true.
// pararTrabalho: que muda o valor da propriedade trabalhando para false.
// Crie um objeto da classe Funcionario e teste os métodos mudarTrabalho, iniciarTrabalho e pararTrabalho. Teste também os métodos herdados da classe Pessoa, como por exemplo, o método que imprime o nome da pessoa.

//Note que eu respondi usando o uso de funções construtoras, pois nesse momento ainda não cheguei em classes, mais a frente, responderei exercícios de classe.

function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}

function Funcionario(nome, idade, sexo, setor, trabalhando) {
  Pessoa.call(this, nome, idade, sexo);
  this.setor = setor;
  this.trabalhando = trabalhando;
}

Funcionario.prototype = Object.create(Pessoa.prototype);
Funcionario.prototype.constructor = Funcionario;

Funcionario.prototype.mudarTrabalho = function(novoSetor){
  this.setor = novoSetor;
}
Funcionario.prototype.iniciarTrabalho = function(iniciar){
  this.trabalhando = iniciar;
}
Funcionario.prototype.paraTrabalho = function(parar){
  this.trabalhando = parar;
}

const f1 = new Funcionario('João Victor',24,'M','Setor de programação',true);
console.log(f1);

f1.mudarTrabalho('Setor de desenvolvimento fronte end');
f1.paraTrabalho(false);
f1.iniciarTrabalho(true);
console.log(f1)
