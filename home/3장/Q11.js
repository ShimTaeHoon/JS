function newArr(arr){
  let typeCheck = typeof arr[0];
  for(let i = 1; i < arr.length; i++){
    if(typeCheck === typeof arr[i]){      
      return true;
    } else {
      return false;
    }
  }
}

let arr = ["a", "b", "c"];
let result = newArr(arr);

console.log(result);