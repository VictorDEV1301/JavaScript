//Crie uma função fábrica de pessoa, que tem um método, andar.

function criaPessoa(nome, sobrenome){
  const criaPessoaPrototype = {
    falar: function(){
      console.log(`${this.nome} ${this.sobbenome} está andando.`)
    }
  }
  return Object.create(criaPessoaPrototype,{
    nome: {
      value: nome,
      enumerable: true
    },
    sobbenome: {
      value: sobrenome,
      enumerable: true
    }
  })
}

const p1 = criaPessoa('João','Victor');
p1.falar();