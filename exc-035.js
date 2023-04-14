// Crie uma classe chamada "Animal" com uma função construtora que recebe dois parâmetros: "nome" e "idade". Adicione um método chamado "comer" que imprime "O [nome do animal] está comendo". 
// Em seguida, crie uma subclasse chamada "Cachorro" que herda da classe "Animal" e adiciona um método chamado "latir" que imprime "O [nome do cachorro] está latindo". Em seguida, crie uma 
// instância da classe "Cachorro" com o nome "Rex" e idade "2". Chame os métodos "comer" e "latir" da instância criada.

function Animal (nome, idade){
  this.nome = nome,
  this.idade = idade
}

Animal.prototype = {
  comer: function(){
    return `O animal ${this.nome} está comendo`;
  }
}

function Cachorro(nome, idade){
  Animal.call(this, nome, idade);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function(){
    return `O cachorro ${this.nome} está latindo`;
  }

const cachorro1 = new Cachorro('rex',2);
console.log(cachorro1.comer());
console.log(cachorro1.latir());