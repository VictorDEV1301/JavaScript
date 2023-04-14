// nome: uma string com o nome da pessoa;
// idade: um número inteiro com a idade da pessoa;
// profissao: uma string com a profissão da pessoa;
// A classe Pessoa também deve ter os seguintes métodos:

// um método chamado "getNome" que retorna o nome da pessoa;
// um método chamado "getIdade" que retorna a idade da pessoa;
// um método chamado "getProfissao" que retorna a profissão da pessoa;
// um método chamado "setNome" que recebe uma string e define o nome da pessoa;
// um método chamado "setIdade" que recebe um número inteiro e define a idade da pessoa;
// um método chamado "setProfissao" que recebe uma string e define a profissão da pessoa;

class Pessoa {
  constructor(nome, idade, profissao){
    this._nome = nome;
    this._idade = idade;
    this._profissao = profissao;
  }

  get nome(){
    return this._nome;
  }

  get idade(){
    return this._idade;
  }

  get profissao(){
    return this._profissao;
  }

  set nome(nome){
    this._nome = nome;
  }

  set idade(idade){
    this._idade = idade;
  }

  set profissao(profissao){
    this._profissao = profissao;
  }
}