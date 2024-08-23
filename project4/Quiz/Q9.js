// 배열: ["apple", "banana", "grape", "kiwi", "watermelon"]
let fruits = ["apple", "banana", "grape", "kiwi", "watermelon"];

// 찾은 요소를 배열에 넣기!
let newArr = [];

// fruits배열의 길이만큼 반복
for(let i = 0; i < fruits.length; i++){
  // 배열에서 문자열의 길이가 5보다 긴요소만 찾고
  if(fruits[i].length > 5){
    // 대문자로 변환하세요.
    let upperFruits = fruits[i].toUpperCase();
    // newArr배열에 toUpperCase()한 값들을 넣기
    newArr.push(upperFruits);
  }

}
console.log(newArr);
// 결과: ["BANANA", "WATERMELON"]
