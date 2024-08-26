//Q18. 책 목록을 관리하는 프로그램을 만들어주세요
// 1) 읽은책 목록을 Set 객체로 생성하세요
let readBook = new Set();
readBook.add("해리포터");
readBook.add("반지의 제왕");
readBook.add("어린왕자");
readBook.add("데미안");
readBook.add("1984");
readBook.add("위대한 게츠비");

console.log("현재 읽은 책 목록 : ", readBook);

// 2) 제목이 7글자 이상인 책을 삭제하세요
for(let sevenDelete of readBook){
  // 배열값중 글자의 길이가 7 이상인 녀석 찾기
  if(sevenDelete.length >= 7){
    // delete로 삭제하기
    readBook.delete(sevenDelete);
    console.log(`${sevenDelete} 을(를) 책 목록에서 삭제했습니다.}`);
  }
}

console.log("삭제된 후 : " , readBook);

// 3) 친구가 읽은 책 목록을 Set객체로 생성하세요
let friendReadBook = new Set();
friendReadBook.add("어린왕자");
friendReadBook.add("1984");
friendReadBook.add("노인과 바다");
friendReadBook.add("그리스인 조르바");

// 4) 내가 읽은 책 목록과 친구가 읽은 책 목록을 각각 출력하세요
console.log("내가 읽은 책 목록 : " , readBook);
console.log("친구가 읽은 책 목록 : ", friendReadBook);

// 5) 나와 친구가 공통으로 읽은 책을 찾아서 출력하세요
let common = new Set();

for(let com of readBook){
  if(friendReadBook.has(com)){
    common.add(com);
  }
};

console.log("두 명의 사용자가 공통으로 읽은 책 : " , common);
