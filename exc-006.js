// Crie uma função construtora chamada "Livro" que tem as seguintes propriedades:

// titulo(string)
// autor(string)
// ano(number)
// lido(boolean)
// Em seguida, crie um método "lerLivro" para a função "Livro", que altera a propriedade "lido" para verdadeiro.

// Por fim, crie um array de objetos "Livro" e preencha - o com alguns livros fictícios.Em seguida, percorra o array e, para cada livro, verifique se foi lido ou 
//não e imprima uma mensagem no console com base nessa verificação.

function Livro(titulo, autor, ano, lido){
  this.titulo = titulo;
  this.autor = autor;
  this.ano = ano;
  this.lido = lido;

  this.mudarEstado = () => this.lido = this.lido === false ? true : false;
}

function conferirLivros(livros){
  for(let i in livros){
    if (livros[i].lido === true) console.log(`O livro ${livros[i].titulo} foi lido`);
    else console.log((`O livro ${livros[i].titulo} não foi lido`))
  }
}

let livros = [];
livros.push(new Livro('Harry Potter', 'JK', 2001, true));
livros.push(new Livro('O senhor da moscas', 'William Golding', 1950, false));
//Mudança de estado do livro
//livros[1].mudarEstado(); 
conferirLivros(livros);



