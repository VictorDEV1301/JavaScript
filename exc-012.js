// Você recebeu um conjunto de dados representando a quantidade de vendas realizadas por uma equipe de vendedores ao longo de um mês. Cada item do conjunto de dados é um objeto com as seguintes propriedades:

// vendedor: o nome do vendedor;
// vendas: um array contendo as vendas realizadas pelo vendedor, sendo cada venda representada por um número.
// Você precisa escrever uma função que recebe esse conjunto de dados e retorna um novo conjunto contendo apenas os vendedores que tiveram uma média de vendas maior ou igual a 10.mal

const vendas = [
  { vendedor: 'João', vendas: [8, 12, 15, 10, 7] },
  { vendedor: 'Maria', vendas: [5, 7, 9, 11, 13, 15] },
  { vendedor: 'Pedro', vendas: [18, 10, 12, 14] },
  { vendedor: 'Lucas', vendas: [6, 8, 10, 12, 14] },
];

const bonsVenderores = vendas.filter(obj => {
  let media = 0;
  for (let venda of obj.vendas) media += venda;
  return media/obj.vendas.length > 10 ? true : false;
})

console.log(bonsVenderores);