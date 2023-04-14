// Crie uma função construtora chamada "Pessoa" que tem as seguintes propriedades:

// nome (string)
// idade (number)
// profissao (string)
// amigos (array)
// Em seguida, crie um método "adicionarAmigo" para a função "Pessoa", que permite adicionar um novo amigo à lista de amigos.

// Por fim, crie um array de objetos "Pessoa" e preencha-o com algumas pessoas fictícias. Em seguida, adicione alguns amigos para cada pessoa usando o método "adicionarAmigo" e 
//imprima a lista de amigos de cada pessoa no console.

function RedeDePessoas(nome, idade, profissao, amigos){
  this.nome = nome;
  this.idade = idade;
  this.profissao = profissao;
  this.amigos = amigos;

  this.adicionarAmigos = (novoAmigo)=>this.amigos.push(novoAmigo);
  this.exibirAmigos = () => console.log(this.amigos.join(', '));
}

const pessoa1 = new RedeDePessoas('João','24','FrontEnd Developer',['Mateus', 'Caio','João Paulo']);
pessoa1.exibirAmigos();
pessoa1.adicionarAmigos('Eduardo');
pessoa1.exibirAmigos();