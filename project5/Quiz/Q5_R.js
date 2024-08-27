// 여러 학생을 인자로 받아서, 
// 특정 과목의 평균점수을 반환하는 함수를 작성하세요.
// 학생이 해당 과목 점수를 가지고 있지 않으면 계산하지 않고,
// 해당 학생은 건너뜁니다.
// 예: 맹구와 유리의 수학과목의 평균점수: (80)/1 = 80

let student1 = { name: "짱구", eng: 80, math: 50, kor: 70};
let student2 = { name: "철수", eng: 90, math: 85, kor: 88};
let student3 = { name: "훈이", eng: 75, math: 95, kor: 92};
let student4 = { name: "맹구", eng: 65};
let student5 = { name: "유리", math: 80, kor: 90};

function calculateAverageScore(subject, ...students) {
  // rest파라미터로 subject를 제외한 students의 나머지 배열 값들을
  // 가져온 뒤 .filter 함수로 필터를 건다
  // 이때 function(student)라는 함수를 만들어서 
  // typeof를 사용해 비교 한다
  // students배열 속 객체의 키(subject)가 undefined(빈값)가 아니라면
  // .filter는 배열의 각 요소를 순회하면서 주어진 조건을 만족하는
  // 값들로 새로운 배열을 생성하기 때문에 
  // 조건을 만족하는 값들로 filterStudents에 초기화 시켜준다.
  let filterStudents = students.filter((student) =>
    typeof student[subject] != "undefined");

  // sum이라는 변수에 위에서 초기화한 filterStudents.reduce를
  // 통해서 누적값을 계산해준다
  // 초기값은 0이며 total에 누적을 시킴
  // 누적되는 값은 student[subject]로 subject의 밸류값임
  let sum = filterStudents.reduce((total, student) => 
    total + student[subject], 0);

  // .length를 통해 filterStudents의 길이
  // 배열에 포함된 학생 객체의 수를 저장하는 count 변수를 만듬
  // 특정 과목 점수를 가진 학생의 총 수를 의미하는 count임
  // 과목의 합계를 구하고 학생수로 나누어 평균을 구하기 위함
  let count = filterStudents.length;

  // sum / count로 과목의 평균을 구하고
  // toFixed를 통해 평균을 소수점 첫째 자리까지 반올림함
  return (sum / count).toFixed(1);
}

function showStudents(...students){
  console.log("학생목록:");
  // forEach문을 사용해 students 배열의 순회하며 각 요소들을
  // 각 학생 객체를 콘솔에 출력함
  students.forEach((student) => console.log(student));
  console.log();
}

showStudents(student1, student2, student3, student4, student5);

let engAvg = calculateAverageScore(
  "eng",
  student1,
  student2,
  student3,
  student4
);

console.log(`짱구, 철수, 훈이, 맹구의 영어과목의 평균점수는 ${engAvg}점 입니다`);

let mathAvg = calculateAverageScore(
  "math",
  student4,
  student5
);

console.log(`맹구와 유리의 수학과목의 점수는 ${mathAvg}점 입니다`);

let korAvg = calculateAverageScore(
  "kor",
  student1,
  student2,
  student3,
  student4,
  student5
);

console.log(`국어과목의 전체 평균점수는 ${korAvg}점 입니다`);

