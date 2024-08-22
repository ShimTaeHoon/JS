function sub(a,b){
  return a-b;
}

let a = 5;
let b = 3;

let result = sub(a,b);
console.log(result);

function add(a,b){
  let sum = 0;

  if(a <= b){
    for(let i = a; i <= b; i++){
      sum = sum + i;
    }
  }

  return sum;
}

let a2 = 3;
let b2 = 5;

let result2 = add(a2, b2);
console.log(result2);


