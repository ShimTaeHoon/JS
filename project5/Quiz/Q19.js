// Q19. 아래와 같이사람객체person을 생성하고, 변수 property를 선언하세요.
// 그리고person 객체에 property 변수를 사용하여 동적으로 속성을 추가하세요.
//  property = "address";
// 초기객체: { name: '철수', age: 21 }
// 업데이트된객체: { name: '철수', age: 21, address: '인천 남동구 만수동' 

let person = {
  name: '철수', age: 21,
};

console.log(person);

let update = "address";

person[update] = "인천 남동구 만수동";

console.log(person);