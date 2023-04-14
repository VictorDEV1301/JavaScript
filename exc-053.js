// Crie uma função que recebe um array de números inteiros como parâmetro.
// A função deve retornar uma Promise que, quando resolvida, retorna um novo array com todos os números ímpares do array original.
// Se o parâmetro passado para a função não for um array de números inteiros, a Promise deve ser rejeitada com uma mensagem de erro.

function inteirosImpares (arrayInteiros){
  return new Promise((resolve, reject)=>{
    flag = true;
    arrayInteiros.forEach(valor => {
      if(!Number.isInteger(valor)) flag = false;
    })
    if(flag){
      arrayInteiros = arrayInteiros.filter(valor => valor%2!==0);
      resolve(arrayInteiros);
    }else{
      reject(new TypeError);
    }
  })
}

/*Recursividade na função promise*/
inteirosImpares([1,2,3,4,5,6,7,8,9])
  .then(arrayInteiros => {
    arrayInteiros.forEach(valor => console.log(valor))
    return inteirosImpares([10,11,12,13,14,15,16,17,18,19])
    .then(arrayInteiros => arrayInteiros.forEach(valor => console.log(valor)));
  })