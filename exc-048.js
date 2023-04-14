// Crie uma classe abstrata chamada "Conta" que tenha duas propriedades: "saldo" e "titular". Em seguida, crie duas subclasses chamadas "ContaCorrente" e "ContaPoupanca", 
// que herdam da classe "Conta". Na classe "ContaCorrente", adicione uma propriedade chamada "limite" e um método chamado "usarLimite" que permite o uso do limite da conta 
// corrente para cobrir um valor de débito que exceda o saldo atual. Na classe "ContaPoupanca", adicione um método chamado "rendimentoMensal" que calcula e retorna o rendimento 
// mensal da conta poupança com base no saldo atual e na taxa de juros.

// Em seguida, crie uma classe chamada "Banco" que tenha uma propriedade chamada "contas" que armazene um array de objetos da classe "Conta". Adicione um método chamado "adicionarConta"
//  que permite adicionar uma nova conta ao array de contas. Adicione também um método chamado "listarContas" que exibe no console as informações de todas as contas do banco.

// Por fim, crie um objeto "meuBanco" da classe "Banco" e adicione algumas contas ao array de contas, incluindo pelo menos uma conta corrente e uma conta poupança. Em seguida, utilize 
// o método "usarLimite" para a conta corrente e o método "rendimentoMensal" para a conta poupança. Utilize também o método "listarContas" para exibir as informações de todas as contas 
// do banco no console.

class Conta {
  constructor(saldo, titular) {
    this.saldo = saldo;
    this.titular = titular;
  }
}

class ContaCorrente extends Conta {
  constructor(saldo, titular, limite) {
    super(saldo, titular);
    this.limite = limite;
    this.uLimite = false;
  }
  usarLimite() {
    this.uLimite = this.uLimite === false ? true : false;
  }
}

class ContaPoupanca extends Conta{
  rendimentoMensal(juros){
    this.saldo = this.saldo + (this.saldo*(juros/100));
  }
}

class Banco{
  constructor(){
    this.contas = [];
  }
  adicionarConta(conta){
    this.contas.push(conta);
  }
  listarContas(){
    this.contas.forEach(valor => console.log(valor));
  }
}

const meuBanco = new Banco();
const contaC = new ContaCorrente(1000,'Titular Corrente',500);
const contaP = new ContaPoupanca(1500,'Titular Poupança');

meuBanco.adicionarConta(contaC);
meuBanco.adicionarConta(contaP);

contaC.usarLimite(true);
contaP.rendimentoMensal(10);
meuBanco.listarContas();