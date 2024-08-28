// Q21. 다음과 같이 책 객체를생성하고, 객체를복사하세요.
// 그리고복사된객체에서출판년도를2023으로변경하세요

let book = {
  title: "위대한 개츠비",
  author: "스콧 피츠제럴드",
  publisheredYear: 1925,
};

console.log("원본객체", book);

let copyBook = book;
console.log("복사된객체", copyBook);

console.log("원본객체의 출판년도:", book.publisheredYear);
copyBook.publisheredYear = 2023;

console.log("복사된객체의 출판년도:", copyBook.publisheredYear);