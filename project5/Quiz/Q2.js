// Q2. 학생의 영어, 수학, 국어 점수를 입력받아 
// 평균점수를 출력하는 함수를 정의하세요
function calculateGrade(name, eng=0, math=0, kor=0){
  let sum = eng + math + kor;
  let avg = sum / 3;
  console.log(`${name}님의 평균성적은 ${avg}점입니다.`);
}

Math.floor(calculateGrade("철수", 85, 90, 78));
Math.floor(calculateGrade("훈이", 80));