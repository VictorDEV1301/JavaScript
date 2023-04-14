//Crie uma função construtora, com nome, cidade e id, e trave a modificação do ID
//Depois use as funções filter e map, para mostrar todas as pessoas da cidade A, e os ID's

function Pessoa(nome, cidade, id) {
  this.nome = nome;
  this.cidade = cidade;
  this.id = id;
  Object.defineProperty(this, 'id',{
    writable: false,
    configurable: false
  })
}

function geradoraDeId(){
  const number = Math.floor(Math.random()*(1000-1)+1);
  if(number < 1000 && number > 100) return `0${number}`;
  if(number < 100 && number > 10) return `00${number}`;
  return `000${number}`;
}

const grupoDePessoas = [
  new Pessoa('Pedro','São Paulo',geradoraDeId()),
  new Pessoa('Paulo','São Paulo',geradoraDeId()),
  new Pessoa('Freed','Rio de Janeiro',geradoraDeId()),
  new Pessoa('Carlos','São Paulo',geradoraDeId())
]

const idDasPessoas = grupoDePessoas.map(obj => obj.id)
console.log(idDasPessoas);