// Q. 사람의 정보를 입력받아 출력하는 함수를 정의하세요.

function printPerson(name, age, ...rest) {
  console.log(`${name}의 나이는 ${age}살이고 취미는 ${rest}입니다.`)
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꼽놀이");