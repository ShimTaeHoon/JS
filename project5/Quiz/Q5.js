//Q5. 학생들의 성적을 계산하는 프로그램을 만들어 주세요.
//  1) 여러 학생을 인자로 입력 받아, 특정과목의 평균점수를 반환하는 함수를 정의하세요.
let stu1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
let stu2 = { name: "철수", eng: 90, math: 85, kor: 88 };
let stu3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
let stu4 = { name: "맹구", eng: 65 };
let stu5 = { name: "유리", math: 80, kor: 90 };

//  2) 만약 학생이 해당 과목의 점수를 가지고있지 않으면 계산하지 않고, 해당학생은 건너뜁니다.
//  예: 맹구와 유리의 수학과목의 평균점수: (80)/1 = 80점
function stuAvg(sub, ...student){
  let sum = student.eng + student.math + student.kor;
  if(student.includes(eng) == false) {
    sum += 1;
  } else if(student.includes(math) == false) {

  } else if(student.includes(kor) == false) {

  }
}
