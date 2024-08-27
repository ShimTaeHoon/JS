//곱셈 함수

// function multiply(a, b){
//   console.log(a * b);
// }
// multiply(5);

//오류를 막기 위해 b 검사하기
// function multiply(a, b){
//   //b에 값이 없으면 1로 초기화
//   if (typeof b === "undefined") {
//     b = 1;
//   }
//   console.log(a * b);
// }
// multiply(5);

//디폴트 파라미터: 함수의 파라미터에 기본값 설정하기
//b값이 전달 됐으면 그대로 사용하고, 전달되지 않았으면 기본값으로 설정
function multiply(a, b = 1){
  console.log(a * b);
}
multiply(5,2); // b=2
multiply(5); // b=1

function say(message = "파라미터가 넘어오지 않았어요"){
  console.log(message);
}

say("안녕하세요");
say();