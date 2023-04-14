// Crie uma função construtora chamada "Veiculo" que possua as propriedades "marca", "modelo" e "ano". 
// Em seguida, crie um protótipo para a função Veiculo chamado "andar" que retorna a string "O veículo [marca] [modelo] de [ano] está andando".

// Por fim, crie duas instâncias da função Veiculo com valores diferentes para as propriedades e chame o método 
// "andar" para cada uma delas, imprimindo o resultado na tela.

function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.ano = ano;
  Object.defineProperty(this, 'modelo', {
    writable: false,
    value: modelo,
    enumerable: true
  })
}

Veiculo.prototype.andar = function () {
  return `O veículo ${this.marca} ${this.modelo} de ${this.ano} está andando.`
}

const estrada = [
  new Veiculo('Ford', 'Fiesta', 2010),
  new Veiculo('Chevrolet', 'Cruze', 2015),
  new Veiculo('Volkswagen', 'Gol', 2020)
]

estrada.forEach(veiculo => {
  console.log(veiculo.andar());
})
