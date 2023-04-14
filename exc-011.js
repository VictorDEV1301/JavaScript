// Imagine que você tem uma lista de objetos que representam produtos em uma loja virtual. Cada objeto contém informações como nome do produto, preço, 
// categoria e disponibilidade. Você deseja filtrar apenas os produtos que estão disponíveis e cujo preço é inferior a R$50,00.

function Produto (produto, preco, categoria, disponibilidade){
  this.produto = produto;
  this.preco = preco;
  this.categoria = categoria;
  this.disponibilidade = disponibilidade;
}

const produto1 = new Produto('celular', 1000, 'tecnologia', true);
const produto2 = new Produto('celular', 1500, 'tecnologia', true);
const produto3 = new Produto('celular', 1200, 'tecnologia', true);
const produto4 = new Produto('celular', 1800, 'tecnologia', true);

let produtos = [];
produtos.push(produto1,produto2,produto3,produto4);

let produtosFiltrados = produtos.filter(obj => obj.preco < 1300);
console.log(produtosFiltrados);