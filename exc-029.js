// Definir o nome e a idade do aluno através de um construtor.
// Definir as notas do aluno através de um setter que recebe uma lista de notas como parâmetro.
// Obter o nome, idade e status do aluno através de getters correspondentes.
// Definir o status do aluno (aprovado/reprovado) de acordo com a média das notas (>= 6 aprovado, < 6 reprovado) através de um setter.
// Obter uma lista com as notas do aluno maiores que 6 através de um filter.
// Obter uma lista com as notas do aluno multiplicadas por 2 através de um map.

function Aluno(idade, aluno, notas) {
  this.idade = idade;
  this.aluno = aluno;
  Object.defineProperty(this, 'notas', {
    set: listaDeNotas => {
      notas = listaDeNotas;
    },
    get: () => notas,
  })
  Object.defineProperty(this, 'status', {
    get: () => {
      let media = this.notas.reduce((ac, valor) => ac + valor, 0);
      const status = ((media / this.notas.length) >= 6) ? 'aprovado' : 'reprovado';
      return status;
    },
    enumerable: false
  })
}

const escola = [
  new Aluno(24, 'João Victor', [8, 9, 7]),
  new Aluno(18, 'Pedro', [5, 4, 6]),
  new Aluno(18, 'Henrique', [8, 9, 7])
];

const escolaAprovados = escola.filter(obj => obj.status === 'aprovado');
console.log(escolaAprovados);

const notasMultiplicadasPorDois = escola.map(obj => {
  return obj.notas.map(notas => notas*2);
});
console.log(notasMultiplicadasPorDois);
console.log(escola[0].notas);