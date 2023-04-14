// Imagine que você está trabalhando em um projeto de sistema de gerenciamento de vendas para uma empresa que vende diferentes tipos de produtos. 
// Você precisa criar uma hierarquia de classes que represente os diferentes tipos de produtos vendidos pela empresa.

// Cada produto tem um nome, um preço e uma quantidade. Além disso, existem diferentes tipos de produtos:

// Produtos físicos, que têm um peso e uma dimensão.
// Produtos digitais, que podem ser baixados na internet.
// Cada tipo de produto tem suas próprias propriedades e métodos. Por exemplo, um produto físico deve ter um método que calcula o custo de envio com 
// base no peso e nas dimensões, enquanto um produto digital não precisa disso.

function Loja(){
  this.estoque = []
}

Loja.prototype = {
  adicionarAoEstoque: function(produto){
    this.estoque.push(produto);
  },
  removerDoEstoque: function(nome){
    this.estoque = this.estoque.filter(produto => produto.nome !== nome);
  },
  listarProdutos: function(){
    if(this.estoque.length === 0){
      console.log('Não temos produtos disponíveis');
      return;
    }
    this.estoque.forEach(produto => console.log(Object.entries(produto)));
  }
}

function Produto(nome, preco, quantidade){
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
}
Produto.prototype = {
  alterarQuantidade: function(novaQuantidade){
    this.quantidade = novaQuantidade;
  }
}

function ProdutoFisico(nome, preco, quantidade, peso){
  Produto.call(this, nome, preco, quantidade);
  this.peso = peso;
  Object.defineProperty(this, 'taxa',{
    enumerable: false,
    value: 10,
    configurable: false
  })
  this.frete = this.calculaFrete();
}

ProdutoFisico.prototype = Object.create(Produto.prototype);
ProdutoFisico.prototype.constructor = ProdutoFisico;
ProdutoFisico.prototype.calculaFrete = function(){
  return this.taxa * this.peso;
}

function ProdutoDigital(nome, preco, quantidade, tamanho){
  Produto.call(this, nome, preco, quantidade);
  this.tamanho = tamanho;
}

ProdutoDigital.prototype = Object.create(Produto.prototype);
ProdutoDigital.prototype.constructor = ProdutoDigital;

const loja = new Loja();
const produtoFisico = new ProdutoFisico('Tijolos', 2, 5000, 1);
const produtoDigital = new ProdutoDigital('Tijolo Ebook',20,'Ilimitada','50kb');

loja.adicionarAoEstoque(produtoDigital);
loja.adicionarAoEstoque(produtoFisico);
loja.removerDoEstoque('Tijolo Ebook')
loja.listarProdutos();

