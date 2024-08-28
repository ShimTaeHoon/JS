// Q22. 다음과 같이 책 객체를생성하고, 객체를완벽하게복사하세요.
// 복사된객체에서저자의성을"김"으로변경하세요

let book = {
  title: "자바 프로그래밍",
  author: {
    firstName: "은종",
    lastName: "박",
  }
};
console.log("원본객체", book);

copyBook = {...book};
console.log("복사된객체", copyBook);

let copyBookJson = JSON.stringify(book);
let deepCopyBookJson = JSON.parse(copyBookJson);

console.log("원본객체의 성:", book.author.lastName);
console.log("복사된객체의 성:", deepCopyBookJson.author.lastName);

