//Q18. 책 목록을 관리하는 프로그램을 만들어주세요
// 1)읽은 책 목록을 Set 객체로 생성하세요
let readBook = new Set();
readBook.add("해리포터");
readBook.add("반지의 제왕");
readBook.add("어린왕자");
readBook.add("데미안");
readBook.add("1984");
readBook.add("위대한 개츠비");

// 2)제목이 7글자 이상인 책을 삭제하세요
for(let a of readBook){
  if(a.length >= 7){
    readBook.delete();
    console.log(`${a}을(를) 책 목록에서 삭제했습니다.`);
  }
}

// 3)친구가 읽은 책 목록을 Set객체로 생성하세요
let friend = new Set();
friend.add("어린왕자");
friend.add("1984");
friend.add("노인과 바다");
friend.add("그리스인 조르바");
// 4)내가 읽은 책 목록과 친구가 읽은 책 목록을 각각 출력하세요
console.log("현재 읽은 책 목록:")
for(let a of readBook){
  console.log(a);
}

console.log();
console.log("친구가 읽은 책 목록:")
for(let a of friend){
  console.log(a);
}
// 5)나와 친구가 공통으로 읽은 책을 찾아서 출력하세요
let common = new Set();
console.log("두 명의 사용자가 공통으로 읽은 책:");
for(let a of readBook){
  if(friend.has(a)){
    common.add(a);
    console.log(a);
  }
};

for(let a of common){
  console.log(a);
}

