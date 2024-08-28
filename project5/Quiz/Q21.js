// Q21. 다음과 같이 책 객체를생성하고, 객체를복사하세요.
// 그리고복사된객체에서출판년도를2023으로변경하세요

let book = {
  title: "위대한 개츠비",
  author: "스콧 피츠제럴드",
  publishedYear: 1925,
};

let copybook = book;

console.log("원본객체 :", book);
console.log("복사된객체 :", copybook);
console.log("원본객체의 출판년도 :" , book.publishedYear);

book.publishedYear = 2023;
console.log("복사된 객체의 출판년도 :", 2023);