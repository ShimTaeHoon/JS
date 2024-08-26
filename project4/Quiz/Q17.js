//영화 목록을 관리하는 프로그램을 만들어주세요

//1) 시청한영화 목록을 Set 객체로 생성하세요
let watchMovie = new Set();
watchMovie.add("인셉션");
watchMovie.add("매트릭스");
watchMovie.add("인터스텔라");

//2) 보고싶은 영화목록을 Set 객체로 생성하세요
let wantMovie = new Set();
wantMovie.add("파이트 클럽");
wantMovie.add("더 울프 오브 월 스트리트");
wantMovie.add("노인을 위한 나라는 없다");

// new Set([배열]);
// 하나씩 추가 하기 귀찮을때 생성자 안에 배열생성 가능
const toWatchMovies = new Set(["파이트 클럽", "더 울프 오브 월 스트리트"]);

//3) 시청한 영화목록과 보고싶은 영화목록을 각각 출력하세요
console.log("시청한 영화 목록 :");
console.log(wantMovie);
console.log("보고싶은 영화 목록 :");
console.log(watchMovie);
console.log();

//목록을 for문을 사용하여 출력
console.log("시청한 영화 목록: ");
for(let movie of watchMovie){
  console.log(movie);
}

//4) “파이트 클럽”이라는 영화를 시청했는지 확인하고 없다면, 
//   시청한 영화에 추가하고, 보고싶은 영화에서 삭제하세요
if(!watchMovie.has("파이트 클럽")) { // watchMovie(시청한 영화)에 파이트클럽이 없다면
    watchMovie.add("파이트 클럽"); // watchMovie에 파이트클럽 추가
    wantMovie.delete("파이트 클럽"); // wantMovie에서 삭제하기
  } 

console.log("파이트 클럽을(를) 시청한 영화 목록에 추가하고, 보고싶은 영화 목록에서 삭제했습니다.")
console.log("현재 시청한 영화 목록 : " , watchMovie);
console.log("현재 보고싶은 영화 목록 : " , wantMovie);

