// Crie uma função construtora chamada "Pessoa" que tenha os seguintes atributos: nome, idade, cidade e hobby. Em seguida, crie um array com várias instâncias de "Pessoa" e aplique as seguintes operações:

// Use o método "filter" para criar um novo array apenas com as pessoas que têm mais de 18 anos.

// Use o método "map" para criar um novo array apenas com os hobbies das pessoas.

// Use o método "forEach" para imprimir na tela o nome, idade e cidade de cada pessoa que tenha um hobby relacionado a esportes.

// Use o método "reduce" para calcular a idade média das pessoas do array.

function Pessoa(nome, idade, cidade, hobby) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
  this.hobby = hobby;
}

const pessoas = [
  new Pessoa("João", 25, "São Paulo", "Futebol"),
  new Pessoa("Maria", 30, "Rio de Janeiro", "Cinema"),
  new Pessoa("Pedro", 20, "Belo Horizonte", "Música"),
  new Pessoa("Ana", 35, "Curitiba", "Leitura"),
  new Pessoa("Lucas", 28, "Porto Alegre", "Fotografia"),
  new Pessoa("Larissa", 22, "Recife", "Dança"),
  new Pessoa("Carlos", 40, "Fortaleza", "Viagens"),
  new Pessoa("Fernanda", 18, "Salvador", "Esportes"),
  new Pessoa("Rafael", 27, "Brasília", "Culinária"),
  new Pessoa("Gabriela", 32, "Belém", "Artesanato")
];

const pessoasComMaisDeTrinta = pessoas.filter(obj => obj.idade >= 30);
const apenasOsHobbys = pessoas.map(obj => obj.hobby);

pessoasComMaisDeTrinta.forEach(valor => console.log(valor));
apenasOsHobbys.forEach(valor => console.log(valor));

const mediaDeIdades = pessoas.reduce((ac,valor) => ac+valor.idade,0)/pessoas.length;
console.log(mediaDeIdades);