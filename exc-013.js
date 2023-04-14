// Você precisa escrever uma função que recebe um array de objetos representando produtos e retorna um novo array contendo apenas os produtos que estão disponíveis em estoque.

// Cada objeto produto tem as seguintes propriedades:

// id: um número inteiro representando o identificador único do produto;
// nome: uma string representando o nome do produto;
// preco: um número representando o preço do produto;
// quantidade: um número inteiro representando a quantidade disponível em estoque do produto.

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 29.99, quantidade: 10 },
  { id: 2, nome: 'Calça Jeans', preco: 59.99, quantidade: 0 },
  { id: 3, nome: 'Tênis', preco: 89.99, quantidade: 5 },
  { id: 4, nome: 'Bermuda', preco: 39.99, quantidade: 2 },
  { id: 5, nome: 'Jaqueta', preco: 99.99, quantidade: 0 },
];

const produtosDisponiveis = produtos.filter(obj => obj.quantidade > 0);
console.log(produtosDisponiveis);