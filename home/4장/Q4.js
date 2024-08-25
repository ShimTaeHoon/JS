let string = "0112233";
let sum = 0;

for(let s of string){
  let num = parseInt(s);
  sum += num;
}

console.log(sum);
