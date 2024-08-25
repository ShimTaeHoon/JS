let string = "aaabbc";
let stringSum = "";
let count = 1;

for(let i = 0; i < string.length; i++){
  if(string[i] === string[i+1]){
    count++;
  } else {
    stringSum += string[i] + count;
    count = 1;
  }
}

console.log(stringSum);