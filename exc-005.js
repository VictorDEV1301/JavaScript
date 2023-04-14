//Crie uma função construtora ContaBancaria que receba titular e saldo inicial
//e tenha as opções de sacar, depositar e consultar os valores.
function ContaBancaria(titular, saldoinicial){
  this.titular = titular;
  this.saldo = saldoinicial;

  this.sacar = (sacar)=>{
    if(this.saldo-sacar < 0) return console.log('Você não pode sacar esse valor!');
    console.log(`Você sacou ${this.saldo} com sucesso.`);
    this.saldo = sacar - this.saldo;
  }

  this.depoistar = depositar=> this.saldo = this.saldo + depositar;
  this.consulta = () => console.log(this.saldo);
}

const cliente1 = new ContaBancaria('João',1000);

cliente1.consulta();
cliente1.sacar(1001);
cliente1.depoistar(1);
cliente1.consulta();
cliente1.sacar(1001);
cliente1.consulta();