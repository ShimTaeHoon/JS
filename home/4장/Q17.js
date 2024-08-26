//Q17 영화 목록을 관리하는 프로그램을 만들어주세요
//1)시청한 영화 목록을 Set객체로 생성하세요
let watchMovie = new Set();
watchMovie.add("인셉션");
watchMovie.add("매트릭스");
watchMovie.add("인터스텔라");

//2)보고싶은 영화 목록을 Set객체로 생성하세요
let wantMovie = new Set(["파이트클럽", "더 울프 오브 월 스트리트", "노인을 위한 나라는 없다"]);

//3)시청한 영화 목록과 보고싶은 영화 목록을 각각 출력하세요
console.log("시청한 영화 목록:");
for(let m of watchMovie){
  console.log(m);
};
console.log();

console.log("보고 싶은 영화 목록:");
for(let m of wantMovie){
  console.log(m);
}

//4)"파이트 클럽"이라는 영화를 시청했는지 확인하고 없다면,
//  시청한 영화에 추가하고,
//  보고싶은 영화에서 삭제하세요
let fight = "파이트 클럽";
if(!watchMovie.has()){
  watchMovie.add(fight);
  wantMovie.delete(fight);
}

console.log("현재 시청한 영화목록(수정):");
for(let m of watchMovie){
  console.log(m);
}

console.log();
console.log("현재 보고 싶은 영화 목록:");
for(let m of wantMovie){
  console.log(m);
}




