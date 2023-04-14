// Crie uma função chamada imprimeNomesComIdade que recebe um array de objetos que contém as propriedades nome e idade. 
// A função deve usar a função forEach para percorrer o array e imprimir o nome de cada pessoa seguido da mensagem "tem X anos", 
// onde X é a idade da pessoa.
const pessoas = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'Pedro', idade: 40 }
];

function imprimeNomesComIdade(array){
  array.forEach(valor => {
    console.log(`${valor.nome} tem ${valor.idade} anos!`)
  })
}

imprimeNomesComIdade(pessoas);