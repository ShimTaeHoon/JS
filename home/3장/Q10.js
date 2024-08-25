function newArr(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

let arr = [-1, 5 ,10 ,-3];
let bigArr = newArr(arr);
console.log(bigArr);