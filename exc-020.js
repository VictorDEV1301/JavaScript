// Crie uma lista chamada "pessoas" contendo 5 objetos com as seguintes informações:
// nome (string)
// idade (number)
// gênero (string)
// profissão (string)
// cidade (string)
// Crie uma lista chamada "pessoasDeSP" que contenha apenas as pessoas que moram em São Paulo. Use o método filter para fazer isso.

// Crie uma lista chamada "pessoasMenosProfissao" que contenha todos os objetos da lista "pessoasDeSP", mas sem a propriedade "profissão". Use o método map para fazer isso.

// Crie uma lista chamada "nomesDeMulheres" que contenha apenas os nomes das mulheres da lista "pessoas". Use o método filter e o método map para fazer isso.

// Crie uma lista chamada "idadesDasPessoas" que contenha apenas as idades das pessoas da lista "pessoas". Use o método map para fazer isso.

// Imprima todas as listas criadas acima no console.

function Pessoa (nome, idade, genero, profissao, cidade){
  this.nome = nome;
  this.idade = idade;
  this.genero = genero;
  this.profissao = profissao;
  this.cidade = cidade;
}

const grupoDePessoas = [
  new Pessoa('João Victor', 24, 'M','Desenvolvedor','Desterro'),
  new Pessoa('Aline', 21, 'F', 'Farmaceutica','Desterro'),
  new Pessoa('Pedro', 30, 'M', 'Professor', 'São Paulo'),
  new Pessoa('Maria', 45, 'F', 'Advogada', 'Rio de Janeiro'),
  new Pessoa('Lucas', 19, 'M', 'Estudante', 'Belo Horizonte'),
  new Pessoa('Carla', 28, 'F', 'Jornalista', 'São Paulo')
];

const pessoasDeSP = grupoDePessoas.filter(obj => obj.cidade === 'São Paulo');
console.log(pessoasDeSP);

const pessoasMenosProfissao = grupoDePessoas.map(obj => {
  delete obj.profissao; // Deleta todas as chaves do objeto.
  return obj;
})
console.log(pessoasMenosProfissao);

const nomesDeMulheres = grupoDePessoas.filter(obj => obj.genero === 'F').map(obj => obj.nome);
console.log(nomesDeMulheres);

const idadesDasPessoas = grupoDePessoas.map(obj => obj.idade);
console.log(idadesDasPessoas);

