// 문자열: “hello world welcome to programming”
let string = "hello world welcome to programming";

// 주어진 문자열에서 각 단어의 첫글자를 대문자로 변환하세요
let split = string.split(" ");

// 바뀐 결과물을 다시 담을 변수
let result = "";

for(let s of split){
  // 대문자로 변경할 문자열을 담을 변수
  let upper = "";
  for(let i = 0; i < s.length; i++){
    
    // if 조건문으로 i 인덱스가 0번 첫번째인지 판단한다 
    // -> 맞다면 대문자로 변경후 연결
    if(i == 0){
      upper = upper + s.charAt(i).toUpperCase();
    // 아니라면 그대로 연결
    } else {
      upper = upper + s.charAt(i);
    }
    
  }
  // 새롭게 생성된 문자열에 대문자로 변경된
  // 값들을 추가하고 뒤에 공백을 추가
  result = result + upper + " ";
}

console.log(result);
// 새로운문자열: “Hello World Welcome To Programming"