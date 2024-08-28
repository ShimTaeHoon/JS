// try~catch: 코드에서 발생하는 오류를 처리

try {
  func1();
} catch (error) {
  console.error(error);
} finally {
  console.log("마지막에 무조건 실행되는 부분");
}
// finally는 오류 발생 여부와 상관없이 무조건 실행됨

try {
  //"myException"를 에러메서지로 사용하여 에러 발생시키기
  throw "myException";
} catch (error) {
  console.log(error);
}