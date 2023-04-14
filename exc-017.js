// Crie uma função construtora chamada Veiculo com as seguintes propriedades: marca, modelo, ano e preco. Em seguida, crie um array de objetos veiculos com pelo menos 5 objetos Veiculo.

// Em seguida, crie uma função chamada filtrarVeiculos que recebe dois parâmetros: anoMinimo e precoMaximo. Essa função deve filtrar o array veiculos para retornar apenas os objetos com ano maior ou igual a anoMinimo e preço menor ou igual a precoMaximo.

// Depois, crie uma função chamada aplicarDesconto que recebe um parâmetro porcentagem. Essa função deve usar o método map para criar um novo array de objetos veiculosComDesconto, onde o preço de cada veículo é reduzido pela porcentagem especificada.

// Por fim, crie uma função chamada calcularMedia que recebe um parâmetro propriedade. Essa função deve calcular a média da propriedade especificada em todos os objetos do array veiculos usando um loop for e a variável total.

// Para testar o seu código, crie um array de objetos veiculos e use as três funções criadas (filtrarVeiculos, aplicarDesconto e calcularMedia) para filtrar os veículos, aplicar um desconto e calcular a média de preço ou ano. Imprima os resultados no console.

function Veiculo(marca, modelo, ano, preco) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = preco;
}

function filtrarVeiculos(objeto, anoMinimo, precoMaximo){
  const obj = {...objeto};
  return (obj.preco < precoMaximo && obj.ano > anoMinimo)?true:false;
}

function aplicarDesconto(objeto, porcentagem){
  const obj = {...objeto};
  obj.preco = obj.preco - obj.preco*(porcentagem/100);
  return obj;
}

function adicionaMotor(objeto){
  const obj = {...objeto};
  obj.motor = Math.floor(Math.random()*(100-1)+1);
  return obj;
}

const veiculos = [
  new Veiculo('Chevrolet', 'Onix', 2021, 80000),
  new Veiculo('Volkswagen', 'Golf', 2019, 95000),
  new Veiculo('Ford', 'EcoSport', 2020, 75000),
  new Veiculo('Toyota', 'Corolla', 2018, 90000),
  new Veiculo('Honda', 'Civic', 2017, 85000),
];

const veiculosFiltrados = veiculos.filter(obj => filtrarVeiculos(obj,2019,100000));
let veiculosComDesconto = veiculosFiltrados.map(obj => aplicarDesconto(obj,10));
veiculosComDesconto = veiculosComDesconto.map(obj => adicionaMotor(obj));

console.log(veiculos.length);
console.log(veiculosFiltrados);
console.log(veiculosComDesconto);