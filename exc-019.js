// Você está trabalhando em um projeto de classificação de filmes e tem duas listas de filmes: uma contendo filmes para adultos e outra para crianças. 
// No entanto, você precisa mesclar essas duas listas em uma única lista de filmes que atenda a uma determinada classificação indicativa.

// Crie duas variáveis de array, uma contendo os filmes para adultos e outra para crianças.

// Peça ao usuário para inserir uma classificação indicativa, por exemplo, "PG-13".

// Crie uma nova variável que é a combinação dos dois arrays usando o método de concatenação de array.

// Use o método de filtragem de array para filtrar os filmes na nova lista que correspondem à classificação indicativa inserida pelo usuário.

// Exiba a nova lista de filmes filtrados para o usuário.

const filmesAdultos = [
  { nome: "O Poderoso Chefão", classificacao: 18 },
  { nome: "Cidadão Kane", classificacao: 12 },
  { nome: "Clube da Luta", classificacao: 18 },
  { nome: "Laranja Mecânica", classificacao: 18 },
  { nome: "Pulp Fiction", classificacao: 18 }
];

const filmesCriancas = [
  { nome: "Toy Story", classificacao: 0 },
  { nome: "A Bela e a Fera", classificacao: 0 },
  { nome: "Aladdin", classificacao: 0 },
  { nome: "O Rei Leão", classificacao: 0 },
  { nome: "Procurando Nemo", classificacao: 0 }
];

const filmes = [...filmesAdultos,...filmesCriancas];
const filmesPorIdade = filmes.filter(obj => obj.classificacao < 13);
const nomesDeFilmes = filmesPorIdade.map(obj => obj.nome);
console.log(nomesDeFilmes);