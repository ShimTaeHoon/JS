let diffrent = [1, "aa", true, "5", 10];
let sum = 0;

for(let i = 0; i < diffrent.length; i++){
  if(typeof diffrent[i] === 'number' || typeof diffrent[i] === 'boolean'){
    sum += diffrent[i];
  } else if(typeof diffrent[i] === 'string'){
    let num = parseInt(diffrent[i]);
    if(!isNaN(num)){
      sum += num
    }
  }
  
}

console.log(sum);