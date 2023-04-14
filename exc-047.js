// Crie uma classe chamada "Veiculo" que tenha duas propriedades: "modelo" e "ano". Em seguida, crie duas subclasses chamadas "Carro" e "Moto", que herdam a classe "Veiculo". Na classe "Carro", 
// adicione uma propriedade chamada "portas" e um método chamado "abrirPortas" que exibe no console uma mensagem informando que as portas do carro foram abertas. Na classe "Moto", adicione uma 
// propriedade chamada "cilindrada" e um método chamado "ligarMotor" que exibe no console uma mensagem informando que o motor da moto foi ligado.

// Em seguida, crie um objeto "meuCarro" da classe "Carro" e um objeto "minhaMoto" da classe "Moto", cada um com valores diferentes para as propriedades "modelo", "ano", "portas" ou "cilindrada".
//  Utilize os métodos "abrirPortas" e "ligarMotor" para exibir mensagens no console para cada objeto.

// Além disso, crie uma classe chamada "Concessionaria" que tenha uma propriedade chamada "veiculos" que armazene um array de objetos da classe "Veiculo". Adicione um método chamado "listarVeiculos" 
// que exibe no console as informações de todos os veículos da concessionária.

// Por fim, crie um objeto "minhaConcessionaria" da classe "Concessionaria" e adicione os objetos "meuCarro" e "minhaMoto" ao array "veiculos". Utilize o método "listarVeiculos" para exibir as
//  informações de todos os veículos da concessionária no console.

class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }
}

class Carro extends Veiculo {
  constructor(modelo, ano, portas) {
    super(modelo, ano);
    this.portas = portas;
  }
  abrirPortas() {
    console.log(`As portas do veículo ${this.modelo} foram abertas`);
  }
}

class Mooto extends Veiculo {
  constructor(modelo, ano, cilindradas) {
    super(modelo, ano);
    this.cilindradas = cilindradas;
  }
  ligarMotor() {
    console.log(`O motor da moto ${this.modelo} foi ligado`);
  }
}

const meuCarro = new Carro('modelo-carro', 2018, 4);
const minhaMoto = new Mooto('Modelo-moto', 2017, 300);

meuCarro.abrirPortas();
minhaMoto.ligarMotor();

class Concessionaria {
  constructor(listaDeCarros = []) {
    this.listaDeCarros = listaDeCarros;
  }
  listarVeiculos(){
    this.listaDeCarros.forEach(valor => console.log(valor));
  }
}

const minhaConcessionaria = new Concessionaria();
minhaConcessionaria.listaDeCarros.push(meuCarro);
minhaConcessionaria.listaDeCarros.push(minhaMoto);
minhaConcessionaria.listarVeiculos();

