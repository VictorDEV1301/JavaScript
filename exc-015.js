// Crie uma função construtora em JavaScript chamada Livro que recebe os parâmetros titulo, autor, genero, anoDePublicacao e preco e 
// define um objeto com essas propriedades. Adicione ao objeto retornado pela função construtora um método chamado formatado que retorna 
// uma string formatada com as informações do livro. A string deve conter o título, autor e preço do livro, separados por pipes (|) e 
// com o preço no formato "R$ x.xx". Crie uma lista de objetos que representam livros usando a função construtora Livro e use o método 
// formatado para cada livro da lista, criando uma nova lista com as strings formatadas. Retorne a lista de strings formatadas.

function Livro(titulo, autor, genero, anoDePublicacao, preco){
  this.titulo= titulo;
  this.autor = autor;
  this.genero = genero;
  this.anoDePublicacao = anoDePublicacao;
  this.preco = preco;

  this.livroFormatado = ()=> `${titulo}|${autor}|R$ ${preco.toFixed(2)}.`;
  this.maisInformacoes = () => `Mais informações: O livro é do gênero:${genero}|Publicado no ano: ${anoDePublicacao}.`
}

const livro1 = new Livro('O principe','Maquiavel','Política',1532,29);
const livro2 = new Livro('1984','George Orwell','Ficção distópica',1949,39);
const livro3 = new Livro('As crônicas de nárnia','C. S. Lewis','Fantasia',1950,24);

let boxLivros = [];
boxLivros.push(livro1,livro2,livro3);

let boxLivrosBaratos = boxLivros.filter(obj => obj.preco < 40);
for(let livro of boxLivrosBaratos) console.log(livro.livroFormatado(), livro.maisInformacoes());