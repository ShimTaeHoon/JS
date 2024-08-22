// 배열의 요소들 중 숫자로 취급할 수 있는 값들을
// 모두 더한 합을 출력하세요
// 단, 배열에는 다양한 자료형이 포함 될수있습니다
// 배열: [1,”aa”, true, “5”, 10]
// 결과: 16

function sumArr(arr){
  let sum = 0;
  // 배열의 요소들 중 숫자로 취급할 수 있는 값들을
    for(let i = 0; i < arr.length; i++){
      let number = arr[i];
      if(typeof number === "number" || !isNaN(parseInt(number))){
      // 모두 더한 합을 출력하세요
      sum = sum + parseInt(number);
    }
  }
  return sum;
}

// 배열: [1,”aa”, true, “5”, 10]
let arr = [1, "aa", true, "5", 10];
console.log(sumArr(arr));

///////////////////////////////////////////////////////
const arr2 = [1, "aa", true, "5", 10];
let sum = 0;

for (let v of arr){

  if(!isNaN(v)){

    if(typeof v == "number" || typeof v == "boolean"){
      // 1, true(1), 10
      sum = sum + v;
    } else if (typeof v == "string") {
      // "5"
      sum = sum + parseInt(v);
    }
  }
}

console.log(sum);