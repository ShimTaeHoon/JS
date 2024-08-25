let arr = [10, 15, 20, 25, 30];

for(let big of arr){
  if(big > 20){
    console.log(big * 2);
  }
};

let newarr1 = arr.filter(function(num){
  return num > 20;
});

console.log(newarr1);

let newarr2 = newarr1.map(function(num){
  return num *2 ;
});

console.log(newarr2);
console.log("test");

let newarr3 = arr.filter((num) => num > 20);
console.log("test" + newarr3);

let newarr4 = arr.filter((num) => num > 20);
console.log("test", newarr4);

let newarr5 = newarr4.map((num) => num * 2);
console.log(newarr5);
console.log("ddddd");

let allNewArr = arr.filter((num) => num > 20)
                   .map((num) => num * 2);
console.log(allNewArr);