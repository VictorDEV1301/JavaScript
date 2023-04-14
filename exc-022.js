//Crie uma calculadora utilizando 4 funções para as operações e uma função princpal para calculadora, use o método reduce para as funções

function adicao(numeros) {
  return numeros.reduce((ac,valor)=>ac+valor);
}

function subtracao(numeros){
  return numeros.reduce((ac,valor)=>ac-valor);
}

function multiplicacao(numeros){
  return numeros.reduce((ac,valor)=>ac*valor);
}

function divisao(numeros){
  return numeros.reduce((ac,valor)=>ac/valor);
}

function calculadora(operacao, ...numeros){
  if(operacao === 'adição') return adicao(numeros);
  if(operacao === 'subtração') return subtracao(numeros);
  if(operacao === 'multiplicação') return multiplicacao(numeros);
  if(operacao === 'divisão') return divisao(numeros);
}

console.log(calculadora('adição',1,2,3,4));
console.log(calculadora('subtração',1,2,3,4));
console.log(calculadora('multiplicação',1,2,3,4));
console.log(calculadora('divisão',1,2,3,4));