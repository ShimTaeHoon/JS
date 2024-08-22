//sort 함수: 배열을 기본 방식으로 오름차순 정렬
//a->z
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // [Apple, Banana, Mango, Orange]

//reverse: 배열을 역순으로 정렬
//z->a
fruits.reverse();
console.log(fruits); // [Orange, Mango, Banana, Apple]

//인자: 두수를 비교하는 함수
//sort함수의 비교함수는 양수, 0, 음수를 반환하며,
//값에 따라 배열 요소의 순서를 결정. 양수가 나오면 위치를 바꿈
//양수가 나올때만 배열에서 위치 교체, 음수는 그대로
var points = [40, 100, 1, 5];
// 100 40 5 1

// a - b: 앞 숫자가 더 크면 양수로 오름차순 정렬
// b - a: 뒷 숫자가 더 크면 양수로 내림차순 정렬
points.sort(

  function(a, b){
    //return a - b;
      return b - a; // 앞숫자가 더 크면 양수
  }

);
console.log(points);

// (1차 순회가 끝난 후)
// 배열:[40, 1, 5, 100]
// 1) 40-1 = 39 -> 1, 40, 5, 100
// 2) 40-5 = 35 -> 1, 5, 40, 100
// 3) 40-100 = -60 -> x

// 객체형 배열
var persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

// 사람의 점수를 비교해서 내림차순으로 정렬하기!
persons.sort(

  function(a, b){
    return b.point - a.point;
  }

);

console.log(persons);