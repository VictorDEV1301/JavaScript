//Crie uma função que recebe nome, alutra e peso. Crie um protótipo que cálcula o IMC da pessoa, e insere no atributo IMC de forma automática.

function Pessoa(nome, altura, peso){
  this.nome = nome;
  this.altura = altura;
  this.peso = peso;
  this.IMC = this.calculaIMC();
}

Pessoa.prototype.calculaIMC = function(){
  return (this.peso/this.altura**2).toFixed(2);
}

const p1 = new Pessoa('João Victor',1.75,97);
Object.entries(p1).forEach(valor => {
  console.log(valor.join(' ').replace(' ', ': '));
})

