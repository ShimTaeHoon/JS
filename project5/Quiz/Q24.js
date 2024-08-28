// Q24. 다음 객체에서 제목(title)과 출시연도(year) 속성을 추출하여
// 각각'movieTitle'과 'releaseYear'라는 이름의 변수에 저장하세요

let movie = {
  title: "인셉션",
  director: "크리스토퍼 놀란",
  year: 2010,
};

let { title: movieTitle, year: releaseYear } = movie;
console.log("제목:", movieTitle);
console.log("출시연도:", releaseYear);

