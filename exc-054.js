function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random()*(max-min)+min);
}

function falaA(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log('A')
      resolve();
    }, rand(1,3));
  })
}

function falaB(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log('B');
      resolve();
    },rand(1,3));
  })
}

function falaC(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log('C');
      resolve();
    },rand(1,3));
  })
}

falaA().then(()=>falaB().then(()=>falaC()));