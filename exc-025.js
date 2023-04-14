//Crie uma conta bancaria utilizando funções construtoras, defineProperty, arrays, map e filter

function ContaBancaria(conta, senha, nome, saldo){
  this.conta = conta;
  this.senha = senha;
  this.nome = nome;
  this.saldo = saldo;

  this.depositar = (deposito)=>{
    this.saldo = this.saldo + deposito;
  }

  Object.defineProperty(this, 'conta',{
    writable: false,
    configurable: false
  });

  Object.defineProperty(this, 'senha',{
    enumerable: false,
    writable: false,
    configurable: false
  });

  Object.defineProperty(this, 'depositar',{
    enumerable: false
  })

}

function geradorDeConta(){
  const conta = Math.floor(Math.random()*(1000-1)+1);
  if (conta < 1000 && conta > 100) return `0${conta}`;
  if (conta < 100 && conta > 10) return `00${conta}`;
  return `000${conta}`;
}

const contasBancarias = [
  new ContaBancaria(geradorDeConta(),'1g5a6d','João Victor',1200)
]

contasBancarias[0].depositar(2000)
console.log(contasBancarias);

