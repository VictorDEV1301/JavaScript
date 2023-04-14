// Crie uma classe chamada "CarrinhoDeCompras" que possui uma propriedade "itens" que é um array vazio. A classe deve ter os seguintes métodos:

// "adicionarItem": que recebe um objeto representando um item e adiciona esse item ao array "itens". Cada item possui as propriedades "nome" (string), "preco" (number) e "quantidade" (number).
// "removerItem": que recebe o nome de um item e remove esse item do array "itens".
// "atualizarQuantidade": que recebe o nome de um item e uma nova quantidade e atualiza a quantidade desse item no array "itens".
// "limparCarrinho": que limpa o array "itens".
// "calcularTotal": que retorna o valor total dos itens do carrinho.
class CarrinhoDeCompras {
  constructor() {
    this.listaDeProdutos = [];
  }
  adcionarItens(produto) {
    this.listaDeProdutos.push(produto);
  }
  removerItens(nome) {
    this.listaDeProdutos = this.listaDeProdutos.filter(objeto => objeto.nome === nome);
  }
  atualizarQuantidade(nome, quantidade) {
    this.listaDeProdutos = this.listaDeProdutos.filter(objeto => {
      return objeto.nome === nome ? objeto.quantidade = quantidade : void (0);
    })
  }
  limparCarirnho() {
    this.listaDeProdutos = [];
  }
  calcularTotal(){
    const total = this.listaDeProdutos.reduce((ac, objeto) => ac += objeto.preco,0);
    return total;
  }
  exibirProdutos() {
    this.listaDeProdutos.forEach(valor => console.log(valor));
  }
}

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

const p1 = new Produto('produto1', 10, 5);
const p2 = new Produto('produto1', 10, 5);
const carrinho1 = new CarrinhoDeCompras;

carrinho1.adcionarItens(p1);
carrinho1.adcionarItens(p2);
// carrinho1.removerItens('produo1');
carrinho1.atualizarQuantidade('produto1', 20);
carrinho1.exibirProdutos();

console.log(carrinho1.calcularTotal())