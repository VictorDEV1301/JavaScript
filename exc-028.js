// Crie uma função construtora em JavaScript que modele uma pessoa. Essa função deve ter os atributos "nome" e "idade". 
// Utilize getters e setters para garantir que a idade não possa ser negativa e que o nome sempre comece com letra maiúscula.
// Crie também um método que retorne uma mensagem de saudação personalizada com o nome da pessoa.

function Pessoa(nome, idade) {
  let _idade = idade < 0 ? undefined : idade;
  let _nome = /[A-Z]/.test(nome[0]) ? nome : undefined;

  Object.defineProperty(this, 'idade', {
    get: () => _idade,
    set: (novaIdade) => {
      if (novaIdade < 0) _idade = undefined;
      else _idade = novaIdade;
    },
    enumerable: true,
    configurable: false
  })

  Object.defineProperty(this, 'nome', {
    get: () => _nome,
    set: (novoNome) => {
      if (!/[A-Z]/.test(novoNome[0])) _nome = undefined;
      else _nome = novoNome;
    },
    enumerable: true,
    configurable: false
  })
}

const grupoDePessoas = [
  new Pessoa('João Victor', 24),
  new Pessoa('Pedro', 12),
  new Pessoa('joaquim', -5),
]

grupoDePessoas.forEach(valor=>{
  for(let chave in valor){
    console.log(valor[chave]);
  }
})