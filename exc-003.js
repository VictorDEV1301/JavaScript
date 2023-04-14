//Crie uma função chamada maiorPalavra que recebe uma string como 
//parâmetro e retorna a maior palavra contida nessa string.
function maiorPalavra(string) {
  let maiorPalavra = '';
  const arrayString = string.split(' ');
  for (let palavra of arrayString) {
    if (palavra.length > maiorPalavra.length) maiorPalavra = palavra;
  };
  return maiorPalavra;
}

console.log(maiorPalavra('Aprender a programar é muito legal!'));