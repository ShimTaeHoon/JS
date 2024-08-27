// Q17. 학생의 이름과 점수를변수에저장하고, 변수를사용하여다음과같이출력하세요.
// 점수가60점이상이면합격이고, 그렇지않으면불합격입니다
// 예: 이름="소영", 점수=75으로 설정한 후, "소영의 점수는 75점으로 합격입니다"

let studentName = "소영";
let score = 75;
let result;
if(score >= 60){
  result = "합격";
} else {
  result = "불합격";
}

console.log(`${studentName}의 점수는 ${score}점으로 ${result}입니다`)