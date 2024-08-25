function fruitArr(arr){
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "string"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let fruit = [1, "apple", true, "banana", 42, "cherry"];
// let result = fruitArr(fruit);
// console.log(result);

console.log(fruitArr(fruit));