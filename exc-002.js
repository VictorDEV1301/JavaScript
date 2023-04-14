//Crie uma função chamada calculaMedia que recebe um array de números 
//como parâmetro e retorna a média aritmética desses números.
function calculaMedia(arr){
  let media = 0; 
  for(let numero in arr) media += arr[numero]; 
  return media/arr.length;
}

console.log(calculaMedia([1,2,3,4]));