// Q19 - 연락처를 관리하는프로그램을만들어주세요.
// 1) 연락처 목록을 Map 객체로 생성하세요.
let contacts = new Map();

contacts.set("민수", {tel:"010-1234-5678", address:"서울특별시 강남구"});
contacts.set("지영", {tel:"010-8765-4321", address:"부산광역시 해운대구"});
contacts.set("현우", {tel:"010-2345-6789", address:"대구광역시 수성구"});
contacts.set("수빈", {tel:"010-9876-5432", address:"인천광역시 남동구"});
contacts.set("동민", {tel:"010-3456-7890", address:"광주광역시 서구"});
contacts.set("하은", {tel:"010-6543-2109", address:"대전광역시 유성구"});

console.log(contacts);
// 2) “동민”의 연락처가존재하는지확인하고, 
//    존재한다면 전화번호를 “010-9999-9999”로 수정하세요.
if(contacts.has("동민")){
  contacts.set("동민", {tel:"010-9999-9999", address:"광주광역시 서구"});
}

console.log(contacts);
// 3) “지영”의 연락처가 존재하는지 확인하고, 존재한다면 연락처를 삭제하세요
if(contacts.has("지영")){
  contacts.delete("지영");
}

// 4) 현재연락처목록을출력하세요
console.log("현재 연락처 목록 : ");
for (let [name, info] of contacts){
  console.log(`${name}: ${info.tel}, ${info.address}`);
}
console.log();

// 5) 전체 연락처의 개수를 출력하세요
console.log("현재 연락처 개수 : " , contacts.size);