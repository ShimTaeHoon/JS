// Q2. 학생의 영어, 수학, 국어 점수를 입력받아 평균점수를출력하는함수를정의하세요

function calcuateGrade(name, eng = 0, math = 0, kor = 0){
  let avg = (eng + math + kor) / 3;
  console.log(`${name}님의 평균 성적은 ${avg.toFixed(3)}점 입니다.`);
}

calcuateGrade("철수", 85, 90, 78);
calcuateGrade("훈이", 80)