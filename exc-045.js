// Crie uma classe chamada "Animal" que possua as propriedades "nome" e "idade". Em seguida, crie duas subclasses de "Animal" chamadas "Cachorro" e "Gato". A classe "Cachorro"
//  deve possuir um método chamado "latir", enquanto a classe "Gato" deve possuir um método chamado "miar". Adicione um método à classe "Animal" chamado "apresentar" que imprime 
//  o nome e a idade do animal. Em seguida, crie duas instâncias, uma de cada subclasse, e chame o método "apresentar" em cada uma delas para mostrar as informações do animal.

class Animal {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }

  aprensentar(){
    return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
  }
}

class Cachorro extends Animal{
  constructor(nome, idade){
    super(nome, idade);
  }

  latir(){
    return `O cachorro ${this.nome} está latindo`;
  }
}

class Gato extends Animal{
  constructor(nome, idade){
    super(nome, idade);
  }

  miar(){
    return `O gato ${this.nome} está miando`;
  }
}

const c1 = new Cachorro('rex',2);
console.log(c1.aprensentar());
console.log(c1.latir());

const g1 = new Gato('Miau',2);
console.log(g1.aprensentar());
console.log(g1.miar());