function sum(x, y){
  let sum = 0;
  for(let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}

let sumsum = sum(3,5);
console.log(sumsum);