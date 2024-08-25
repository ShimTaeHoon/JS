const arr = [1, 'aa', true, 5, 10];
let sum = 0;

for(let i = 0; i < arr.length; i++){
  let type = typeof arr[i];

  if(type === 'number'){
    sum += arr[i];
  }
};

console.log(sum);

