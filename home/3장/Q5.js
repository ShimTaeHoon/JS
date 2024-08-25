//Q5-1
for(let i = 1; i < 11; i++){
  if(i%2 == 0){
    console.log(i);
  }
};

//Q5-2
for(let i = 10; i >= 1; i--){
  if(i%2 == 1){
    console.log(i);
  }
};

//Q5-3
let sum = 0;
for(let i = 1; i < 11; i++){
  sum += i;
};

console.log(sum);

//Q5-4
let sum2 = 0;
for(let i = 0; i < 21; i++){
  if(i%3 == 0 || i%5 == 0){
    sum2 += i;
  }
};

console.log(sum2);


