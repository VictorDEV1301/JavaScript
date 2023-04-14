// Crie uma classe ContaBancaria com as seguintes propriedades e métodos:

// numero: o número da conta bancária (um número inteiro);
// titular: o titular da conta bancária (uma string);
// saldo: o saldo da conta bancária (um número decimal);
// depositar(valor): um método que adiciona valor ao saldo da conta bancária;
// sacar(valor): um método que retira valor do saldo da conta bancária, se houver saldo suficiente;
// transferir(contaDestino, valor): um método que transfere valor da conta bancária atual para a contaDestino, se houver saldo suficiente na conta atual;
// extrato(): um método que retorna uma string com o número da conta, o titular e o saldo atual.
// Crie uma subclasse ContaCorrente que herda da classe ContaBancaria, com as seguintes propriedades e métodos adicionais:

// limite: o limite de crédito da conta corrente (um número decimal);
// sacar(valor): sobrescreva o método sacar da classe ContaBancaria para permitir sacar até o limite de crédito, se o saldo da conta for insuficiente.
// Crie uma subclasse ContaPoupanca que herda da classe ContaBancaria, com o seguinte método adicional:

// renderJuros(taxa): um método que adiciona juros à conta poupança, usando a taxa especificada em porcentagem.
// Por fim, crie objetos conta1, conta2 e conta3 com as seguintes características:

// conta1: uma conta corrente com número 123, titular "João", saldo inicial 1000, limite de crédito 500;
// conta2: uma conta poupança com número 456, titular "Maria", saldo inicial 2000;
// conta3: uma conta bancária com número 789, titular "Pedro", saldo inicial 3000.
// Realize as seguintes operações:

// Deposite 500 na conta1;
// Saque 1500 da conta1;
// Deposite 1000 na conta2;
// Transfira 500 da conta2 para a conta1;
// Saque 3500 da conta1;
// Render juros de 2% na conta2;
// Ao final de cada operação, exiba o extrato de todas as contas.

function ContaBancaria(numero, titular, saldo) {
  this.numero = numero;
  this.titular = titular;
  this.saldo = saldo;
}

ContaBancaria.prototype = {
  depositar: function (valorDoDeposito) {
    this.saldo += valorDoDeposito;
  },
  sacar: function (valorDoSaque) {
    if ((this.saldo -= valorDoSaque) <= 0) {
      console.log(`Prezado, ${this.titular}. Você não pode sacar esse valor`);
      return;
    }
    this.saldo - + valorDoSaque;
    ;
  },
  transferir: function (contaDestino, valorDaTransferencia) {
    this.saldo -= valorDaTransferencia;
    contaDestino.saldo += valorDaTransferencia;
  },
  extrato: function () {
    return `${this.numero}, ${this.saldo}, ${this.titular}!`;
  }
}

function ContaCorrente(numero, titular, saldo, limite) {
  ContaBancaria.call(this, numero, titular, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(ContaBancaria.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valorDoSaque) {
  if (((this.saldo + this.limite) - valorDoSaque) <= 0) {
    console.log(`Prezado, ${this.titular}. Você não pode sacar esse valor`);
    return;
  }
  this.saldo -= valorDoSaque;
}

function ContaPoupanca(numero, titular,saldo){
  ContaBancaria.call(this, numero, titular, saldo);
}

ContaPoupanca.prototype = Object.create(ContaBancaria.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.renderJuros = function(taxa){
  this.saldo = this.saldo + (this.saldo*(taxa/100));
}

const conta1 = new ContaCorrente(123,'João',1000,500);
const conta2 = new ContaPoupanca(456, 'Maria',2000);
const conta3 = new ContaBancaria(789,'Pedro',3000);

console.log(Object.entries(conta1));
console.log(Object.entries(conta2));
console.log(Object.entries(conta3));

conta1.depositar(500);
conta1.sacar(1500);
conta2.depositar(1000);
conta2.transferir(conta1,500);
conta1.sacar(3500);
conta2.renderJuros(2)

console.log(Object.entries(conta1));
console.log(Object.entries(conta2));
console.log(Object.entries(conta3));
