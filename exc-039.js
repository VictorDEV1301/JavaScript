// Crie um sistema de cadastro de livros que permita adicionar, remover e pesquisar livros. O sistema deve ser implementado em JavaScript usando funções construtoras e métodos.

// Crie uma função construtora Livro que tenha os seguintes atributos:

// titulo
// autor
// ano
// editora
// A função construtora deve ter um método imprimirDetalhes que imprime os detalhes do livro no console.

// Crie uma função construtora Biblioteca que possua uma lista de livros e tenha os seguintes métodos:

// adicionarLivro: que recebe um objeto da função construtora Livro e adiciona o livro na lista de livros da biblioteca.
// removerLivro: que recebe um título de um livro e remove o livro da lista de livros da biblioteca.
// pesquisarLivro: que recebe uma string contendo um termo de pesquisa e retorna uma lista de livros que contêm esse termo no título, autor ou editora.
// Crie um objeto da função construtora Biblioteca e teste os métodos adicionarLivro, removerLivro e pesquisarLivro. Crie alguns livros e adicione-os à biblioteca,
//  em seguida, pesquise por um termo e verifique se a lista retornada contém os livros esperados. Teste também a remoção de um livro e verifique se ele foi removido corretamente da lista.

function Livro(titulo, autor, ano, editora) {
  this.titulo = titulo;
  this.autor = autor;
  this.ano = ano;
  this.editora = editora;
}

Livro.prototype.imprimitDetalhes = function () {
  console.log(`${this.titulo}|${this.autor}|${this.ano}|${this.editora}`);
}

function Biblioteca(listaDeLivros) {
  this.listaDeLivros = listaDeLivros;
}

Biblioteca.prototype.adicionarLivro = function (livro) {
  this.listaDeLivros.push(livro);
}

Biblioteca.prototype.removerLivro = function (titulo) {
  this.listaDeLivros = this.listaDeLivros.filter(obj => obj.titulo !== titulo);
}

Biblioteca.prototype.pesquisarLivro = function (termo) {
  let livroPesquisado = this.listaDeLivros.filter(obj => {
    return obj.titulo.includes(termo) || obj.autor.includes(termo) || obj.editora.includes(termo);
  });
  return livroPesquisado;
}

const livro1 = new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, 'Reynal & Hitchcock');
const livro2 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'George Allen & Unwin');
const livro3 = new Livro('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1997, 'Bloomsbury');
const livro4 = new Livro('A Guerra dos Tronos', 'George R.R. Martin', 1996, 'Bantam Spectra');

const biblioteca = new Biblioteca([]);
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);

const resultadoPesquisa1 = biblioteca.pesquisarLivro('Senhor');
console.log(resultadoPesquisa1);

const resultadoPesquisa2 = biblioteca.pesquisarLivro('r');
console.log(resultadoPesquisa2); 

biblioteca.removerLivro('O Pequeno Príncipe');
console.log(biblioteca.listaDeLivros);

const livro5 = new Livro('O Código Da Vinci', 'Dan Brown', 2003, 'Doubleday');
biblioteca.adicionarLivro(livro5);
console.log(biblioteca.listaDeLivros); 