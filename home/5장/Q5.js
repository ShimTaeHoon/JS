// Q5. 학생들의 성적을 계산하는프로그램을만들어주세요.
// 1) 여러 학생을 인자로입력받아, 특정과목의평균점수를반환하는함수를정의하세요.
// 2) 만약 학생이 해당과목의점수를가지고있지않으면계산하지않고, 해당학생은건너뜁니다.
// 예: 맹구와 유리의수학과목의평균점수: (80)/1 = 80점

const student1 = { name: "짱구", eng: 80, math: 50, kor: 70 };
const student2 = { name: "철수", eng: 90, math: 85, kor: 88 };
const student3 = { name: "훈이", eng: 75, math: 95, kor: 92 };
const student4 = { name: "맹구", eng: 65 };
const student5 = { name: "유리", math: 80, kor: 90 };

const students = [student1, student2, student3, student4, student5];

function studentSubject(subject, ...students) {
  let sFilter = students.filter(function (student) {
    return typeof student[subject] != 'undefined';
  });

  let sum = sFilter.reduce((total, student) => total + student[subject],0);

  let count = sFilter.length;

  return (sum / count).toFixed(1);
};

function showStudent(...students){
  console.log("학생목록");
  students.forEach((student) => console.log(student));
};

showStudent(student1, student2, student3, student4, student5);

let engAvg = studentSubject("eng", student1, student2, student3, student4);
let mathAvg = studentSubject("math", student4, student5);
let korAvg = studentSubject("kor", student1, student2, student3, student5);
console.log(`짱구, 철수, 훈이, 맹구의 영어과목의 평균점수는 ${engAvg} 입니다`);
console.log(`맹구와 유리의 수학과목의 평균점수는 ${mathAvg} 입니다`);
console.log(`국어과목의 전체 평균점수는 ${korAvg} 입니다`);