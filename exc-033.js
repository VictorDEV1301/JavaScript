// Crie um sistema de gerenciamento de produtos em JavaScript que permita adicionar novos produtos, remover produtos existentes e listar todos os produtos cadastrados.

// Para isso, você deve criar uma função construtora chamada "Produto" que possua as propriedades "nome", "preco" e "descricao". Em seguida, crie um protótipo para a função Produto chamado 
// "desconto" que retorna o valor do produto com um desconto de 10%.

// Em seguida, crie uma função chamada "GerenciadorDeProdutos" que possua um array vazio chamado "produtos" e três métodos:

// "adicionarProduto", que recebe um objeto Produto como parâmetro e adiciona esse produto ao array "produtos";
// "removerProduto", que recebe o nome de um produto como parâmetro e remove esse produto do array "produtos";
// "listarProdutos", que retorna um array contendo todos os produtos cadastrados, com seus respectivos nomes, preços e descrições.

// Por fim, crie algumas instâncias da função Produto, adicione-as ao gerenciador de produtos, remova uma delas e liste todos os produtos cadastrados 
// com seus respectivos nomes, preços e descrições.

function Produto(nome, preco, descricao) {
  this.nome = nome;
  this.preco = preco;
  this.descricao = descricao;
}

Produto.prototype = {
  desconto: function (desconto) {
    this.preco = this.preco - (this.preco * (desconto / 100));
  }
}

function GerenciadorDeProdutos(array) {
  this.array = array;
}

GerenciadorDeProdutos.prototype = {
  adicionarProduto: function (produto) {
    this.array.push(produto);
  },
  removerProduto: function (nomeDoProduto) {
    this.array = this.array.filter(obj => obj.nome !== nomeDoProduto);
  },
  listarProdutos: function () {
    this.array.forEach((valor) => {
      console.log(Object.values(valor));
    })
  }
}

const v1 = new Produto('Produto 1', 100, 'Descrição do produto 1');
v1.desconto(10);
const v2 = new Produto('Produto 2', 100, 'Descrição do produto 2');
const v3 = new Produto('Produto 3', 100, 'Descrição do produto 3');
const produtos = [v1, v2, v3];

const gerenciador = new GerenciadorDeProdutos(produtos);

gerenciador.removerProduto('Produto 2');

const v4 = new Produto('Produto 4', 200, 'Descrição do produto 4');
v4.desconto(20);
gerenciador.adicionarProduto(v4);
gerenciador.listarProdutos();
