// Imagine que você está trabalhando em um projeto de sistema de gerenciamento de vendas para uma empresa que vende diferentes tipos de produtos. 
// Você precisa criar uma hierarquia de classes que represente os diferentes tipos de produtos vendidos pela empresa.

// Cada produto tem um nome, um preço e uma quantidade. Além disso, existem diferentes tipos de produtos:

// Produtos físicos, que têm um peso e uma dimensão.
// Produtos digitais, que podem ser baixados na internet.
// Cada tipo de produto tem suas próprias propriedades e métodos. Por exemplo, um produto físico deve ter um método que calcula o custo de envio com 
// base no peso e nas dimensões, enquanto um produto digital não precisa disso.

class Loja {
  constructor() {
    this.estoque = [];
  }
  adicionarAoEstoque(produto) {
    this.estoque.push(produto);
  }
  removerDoEstoque(nome) {
    this.estoque = this.estoque.filter(produto => produto.nome !== nome);
  }
  listarProdutos() {
    if (this.estoque.length === 0) {
      console.log('Não temos produtos disponíveis');
      return;
    };
    this.estoque.forEach(produto => console.log(Object.entries(produto)));
  }
}

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  alterarQuantidade(novaQuantidade) {
    this.quantidade = novaQuantidade;
  }
}

class ProdutoFisico extends Produto {
  constructor(nome, preco, quantidade, peso) {
    super(nome, preco, quantidade);
    this.peso = peso;
    Object.defineProperty(this, 'taxa', {
      enumerable: false,
      value: 10,
      configurable: false
    })
    this.frete = ProdutoFisico.calculaFrete(this.peso, this.taxa);
  }
  static calculaFrete(peso, taxa) {
    return peso * taxa;
  }
}

class ProdutoDigital extends Produto {
  constructor(nome, preco, quantidade, tamanho) {
    super(nome, preco, quantidade);
    this.tamanho = tamanho;
  }
}

const loja = new Loja();
const produtoFisico = new ProdutoFisico('Tijolos', 2, 5000, 1);
const produtoDigital = new ProdutoDigital('Tijolo Ebook',20,'Ilimitada','50kb');

loja.adicionarAoEstoque(produtoDigital);
loja.adicionarAoEstoque(produtoFisico);
loja.listarProdutos();
