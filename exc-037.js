// Crie uma classe chamada "Pessoa" com as seguintes propriedades e métodos:

// Propriedades:

// nome (uma string)
// idade (um número inteiro)
// cidade (uma string)
// email (uma string)
// Métodos:

// Um método chamado "dizerOi", que exibe uma mensagem de saudação no console, contendo o nome e a cidade da pessoa.
// Crie uma subclasse de Pessoa chamada "Estudante" com as seguintes propriedades e métodos:

// Propriedades:

// todas as propriedades da classe Pessoa
// matricula (uma string que representa a matrícula do estudante)
// notas (um array de números que representa as notas do estudante)
// Métodos:

// Um método chamado "calcularMedia", que calcula a média das notas do estudante e exibe o resultado no console.
// Crie uma subclasse de Estudante chamada "EstudantePosGraduacao" com as seguintes propriedades e métodos:

// Propriedades:

// todas as propriedades da classe Estudante
// orientador (uma string que representa o nome do orientador do estudante)
// Métodos:

// Um método chamado "definirOrientador", que permite definir o nome do orientador do estudante.
// Um método chamado "dizerTchau", que exibe uma mensagem de despedida no console, contendo o nome e a cidade da pessoa.
// Agora, crie uma função construtora chamada "Professor" com as seguintes propriedades e métodos:

// Propriedades:

// nome (uma string)
// idade (um número inteiro)
// cidade (uma string)
// email (uma string)
// disciplina (uma string que representa a disciplina que o professor leciona)
// Métodos:

// Um método chamado "dizerOi", que exibe uma mensagem de saudação no console, contendo o nome e a disciplina do professor.
// Um método chamado "dizerTchau", que exibe uma mensagem de despedida no console, contendo o nome e a disciplina do professor.
// Agora, crie instâncias das classes e da função construtora e chame seus métodos para testar se tudo está funcionando corretamente. 
// Por exemplo, crie um objeto "estudantePosGraduacao" e chame os métodos "dizerOi", "calcularMedia", "definirOrientador" e "dizerTchau" 
// para testar se tudo está funcionando corretamente.

function Pessoa(nome, idade, cidade, email) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
  this.email = email;
}

Pessoa.prototype = {
  dizerOi: function () {
    console.log(`Oi, meu nome é ${this.nome} e moro na cidade ${this.cidade}`);
    return;
  }
}

function Estudante(nome, idade, cidade, email, matricula, notas) {
  Pessoa.call(this, nome, idade, cidade, email);
  this.matricula = matricula;
  this.notas = notas;
  this.media = this.calcularMedia();
}

Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

Estudante.prototype.calcularMedia = function () {
  const media = this.notas.reduce((ac, valor) => ac += valor, 0);
  return (media / this.notas.length).toFixed(1);
}


function EstudantePosGraduacao(nome, idade, cidade, email, matricula, notas, orientador) {
  Estudante.call(this, nome, idade, email, cidade, matricula, notas);
  this.orientador = orientador;
}

EstudantePosGraduacao.prototype = Object.create(Estudante.prototype);
EstudantePosGraduacao.prototype.constructor = EstudantePosGraduacao;

EstudantePosGraduacao.prototype.adcionarOrientador = function (nomeDoOrientador) {
  this.orientador = nomeDoOrientador;
}

EstudantePosGraduacao.prototype.dizerTchau = function () {
  console.log(`Meu nome é: ${this.nome}, moro na cidade ${this.cidade} e estou falando tchau`);
}

function Professor(nome, idade, cidade, email, disciplina) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
  this.email = email;
  this.disciplina = disciplina;
}

Professor.prototype = {
  dizerOi: function () {
    console.log(`Oi, meu nome é ${this.nome} e ministro a discplina ${this.disciplina}`);
  },
  dizerTchau: function () {
    console.log(`Meu nome é: ${this.nome}, ministo a discplina ${this.disciplina} e estou falando tchau`);
  }
}


/*Testes do código*/
const pessoa = new Pessoa('Fulano', 25, 'São Paulo', 'fulano@email.com');
pessoa.dizerOi();


const estudante = new Estudante('Beltrano', 20, 'Rio de Janeiro', 'beltrano@email.com', '123', [8, 9, 7]);
estudante.dizerOi(); 
console.log(estudante.media); 

const estudantePosGraduacao = new EstudantePosGraduacao('Ciclano', 30, 'Curitiba', 'ciclano@email.com', '456', [9, 8, 10]);
estudantePosGraduacao.dizerOi(); 
estudantePosGraduacao.adcionarOrientador('Dr. Fulano de Tal');
estudantePosGraduacao.dizerTchau(); 

const professor = new Professor('Dr. Fulano de Tal', 40, 'Belo Horizonte', 'fulano@professor.com', 'Matemática');
professor.dizerOi(); 
professor.dizerTchau(); 