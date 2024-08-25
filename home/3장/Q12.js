function fruitArr(arr, text){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === text){
      return true;
    }
  }
  return false;
};

function fruitArr2(arr, text){
  return arr.includes(text);
}

let fruit = ["apple", "banana", "cherry"];
console.log(fruitArr(fruit, "banana"));
console.log(fruitArr2(fruit, "apple"));