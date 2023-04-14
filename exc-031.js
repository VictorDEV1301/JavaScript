// Crie uma função construtora chamada "Produto" que recebe como parâmetros os atributos do produto: nome, preço e quantidade em estoque. Essa função deve criar um objeto com 
// esses atributos e métodos para atualizar a quantidade em estoque e calcular o valor total do produto no estoque (quantidade x preço).

// Crie uma função chamada "adicionarProduto" que recebe como parâmetro um objeto do tipo Produto e adiciona ele a uma lista de produtos da loja.

// Crie uma função chamada "buscarProduto" que recebe como parâmetro o nome de um produto e retorna o objeto do tipo Produto correspondente, caso ele exista na lista de produtos da loja.

// Crie uma função chamada "removerProduto" que recebe como parâmetro o nome de um produto e remove ele da lista de produtos da loja.

// Crie uma função chamada "listarProdutos" que retorna a lista de produtos da loja com seus respectivos atributos e valores atualizados.

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  this.valor = () => {
    return this.preco * this.estoque;
  };
}

function adicionarProduto(obj_produto, listaDeProdutos) {
  listaDeProdutos.push(obj_produto);
}

function buscarProduto(nomeDoProduto, listaDeProdutos) {
  const novaListaDeProdutos = listaDeProdutos.filter(obj => obj.nome === nomeDoProduto);
  return novaListaDeProdutos;
}

function removerProduto(nomeDoProduto, listaDeProdutos) {
  const novaListaDeProdutos = listaDeProdutos.filter(obj => obj.nome !== nomeDoProduto);
  return novaListaDeProdutos;
}

function listarProdutos(listaDeProdutos){
  listaDeProdutos.forEach(valor => {
    console.log(valor.nome);
  })
}

let listaDeProdutos = [];

let produto1 = new Produto("Camiseta", 25.99, 50);
let produto2 = new Produto("Calça Jeans", 89.99, 30);
let produto3 = new Produto("Tênis", 129.99, 20);
let produto4 = new Produto("Boné", 15.99, 100);
let produto5 = new Produto("Saia", 39.99, 40);

adicionarProduto(produto1, listaDeProdutos);
adicionarProduto(produto2, listaDeProdutos);
adicionarProduto(produto3, listaDeProdutos);
adicionarProduto(produto4, listaDeProdutos);
adicionarProduto(produto5, listaDeProdutos);


/*Note que não é correto redefinir a lista de produtos, pois perdemos
o valor original, isso foi feito apenas para teste das funções acima*/
listarProdutos(listaDeProdutos);
listaDeProdutos = removerProduto('Camiseta',listaDeProdutos);
console.log(listaDeProdutos);

listaDeProdutos = buscarProduto('Tênis', listaDeProdutos);
console.log(listaDeProdutos);

console.log(produto3.valor());




