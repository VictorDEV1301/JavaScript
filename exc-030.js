// Suponha que você está desenvolvendo um sistema para uma livraria. A livraria tem um catálogo com vários livros, cada um com as seguintes informações: título, autor, gênero, preço e quantidade em estoque.

// Crie uma função construtora chamada "Livro" que recebe todas essas informações como parâmetros e retorna um objeto com essas informações.

// Além disso, crie uma lista chamada "catalogo" que deve conter objetos do tipo "Livro".

// A lista "catalogo" deve ter os seguintes métodos:

// Um método chamado "adicionarLivro" que recebe um objeto do tipo "Livro" como parâmetro e o adiciona à lista de livros do catálogo.
// Um método chamado "buscarLivroPorTitulo" que recebe o título de um livro como parâmetro e retorna um objeto do tipo "Livro" que corresponde ao título informado.
// Um método chamado "buscarLivroPorAutor" que recebe o nome de um autor como parâmetro e retorna uma lista de objetos do tipo "Livro" que correspondem ao autor informado.
// Um método chamado "buscarLivroPorGenero" que recebe o gênero de um livro como parâmetro e retorna uma lista de objetos do tipo "Livro" que correspondem ao gênero informado.
// Um método chamado "atualizarQuantidadeEmEstoque" que recebe o título de um livro e a quantidade em estoque como parâmetros e atualiza a quantidade em estoque do livro correspondente na lista de livros do catálogo.
// Você pode criar uma função auxiliar para buscar um livro pelo título, já que essa busca será utilizada em outros métodos. Também é possível adicionar outras funcionalidades que você julgar necessárias ou interessantes.

function Livro(titulo, autor, genero, preco, estoque) {
  this.titulo = titulo;
  this.autor = autor;
  this.genero = genero;
  this.preco = preco;
  this.estoque = estoque;
}

const catalogo = {
  adicionaLivro: function (titulo, autor, genero, preco, estoque) {
    const livro = new Livro(titulo, autor, genero, preco, estoque);
    return livro;
  },
  buscarLivro: function(quesito, info, array){
    const livroFiltrado = array.filter(obj => obj[quesito] === info);
    return livroFiltrado;
  }
};

const biblioteca = [];

biblioteca.push(catalogo.adicionaLivro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Infantil', 25.90, 10));
biblioteca.push(catalogo.adicionaLivro('O Hobbit', 'J.R.R. Tolkien', 'Fantasia', 39.90, 8));
biblioteca.push(catalogo.adicionaLivro('A Guerra dos Tronos', 'George R.R. Martin', 'Fantasia', 49.90, 5));
biblioteca.push(catalogo.adicionaLivro('O Código Da Vinci', 'Dan Brown', 'Suspense', 29.90, 15));
biblioteca.push(catalogo.adicionaLivro('A Menina que Roubava Livros', 'Markus Zusak', 'Drama', 27.90, 12));

console.log(catalogo.buscarLivro('titulo','O Pequeno Príncipe',biblioteca));
