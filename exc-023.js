// Escreva uma função geradora que gere uma sequência de números primos infinita. A função deve aceitar um argumento opcional 'n', 
// que define o número máximo de primos a serem gerados. Se 'n' não for especificado, a função deve continuar gerando primos infinitamente. 
// A função deve ser implementada de forma eficiente, evitando cálculos redundantes e operações desnecessárias.

function* geradoraDeNunmerosPrimos(max){
  let number = 2;
  let contador = 0;
  while (contador < max){
    let ePrimo = true;
    for(let i=2; i<number;i++){
      if(number % i === 0){
        ePrimo = false;
        break;
      }
    }
    if(ePrimo) {
      yield number;
      contador++;
    }
    number++;
  }
}

const numeroPrimo = geradoraDeNunmerosPrimos(100);
for(let i=0; i<100; i++){
  console.log(numeroPrimo.next().value);
}


