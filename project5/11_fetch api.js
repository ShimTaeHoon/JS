//fetch: 서버와 데이터를 주고받기 위한 API 호출 함수

//인자: 서버주소(URL), HTTP 메소드, 전송할 데이터 등
//GET방식은 생략 가능

//fetch함수는 자체적으로 promise객체를 생성하여 반환하기 때문에
//뒤에 then 또는 catch함수를 이어서 사용할 수 있다

// fetch("http://192.168.0.67:8080/board/read?no=1")
//   .then((response) => response.json()) // 응답데이터를 객체로 변환
//   .then((json) => { console.log(json) }); // 변환한 데이터 출력

// POST - 새로운 게시물 생성
// fetch("http://192.168.0.67:8080/board/register", {
//   // 내가 보낸 데이터를 등록해줌 (POST)
//   method: "POST",
//   // JSON문자열 타입으로 데이터를 보냄
//   body: JSON.stringify( {
//     title: "가입인사",
//     content: "안녕하세요~",
//     writer: "김두한",
//   }), // 전송할 데이터
  
//   headers: { 
//     "content-type": "application/json; charset=UTF-8"
//   }
// })
// .then( (response) => response.text() ) //응답이 단순한 텍스트일 때
// .then( (text) => {console.log(text)} );

// 28

// PUT - 본인이 작성한 게시물 수정
// fetch("http://192.168.0.67:8080/board/modify", {
//   method: "PUT",
//   body: JSON.stringify( {
//     no: 28, 
//     title: "지존태훈",
//     content: "안녕하세요 슈가 아유미에요~",
//     writer: "구마적",
//   }), 
  
//   headers: { 
//     "content-type": "application/json; charset=UTF-8"
//   }
// })
// .then((response) => console.log(response.status)); // 상태 코드만 응답

// DELETE - 본인의 게시물 삭제
fetch("http://192.168.0.67:8080/board/remove?no=28", {

  method: "DELETE",
  
})
.then((response) => console.log(response.status) );