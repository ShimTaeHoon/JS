function validate(f) {
  // ID 정규식
  let regId = /^[0-9a-z]{4,8}$/;
  // 주민등록번호 정규식(앞자리)
  let regPid1 = /^\d{6}$/;
  // 주민등록번호 정규식(뒷자리)
  let regPid2 = /^\d{7}$/;

  // ID 체크
  if (!regId.exec(f.id.value)) {
    alert("아이디는 4~8자 소문자 or 숫자");
    f.id.focus();
    return;
  }

  // PW 체크
  if (f.pw.value != f.checkpw.value) {
    alert("비밀번호가 맞지 않습니다..");
    f.pw.focus();
    return;
  }

  // 이름 체크
  if (f.name.value == "") {
    alert("이름을 입력하세요..");
    f.name.focus();
    return;
  }

  // 주민등록번호 체크
  if (!regPid1.exec(f.sn1.value)) {
    alert("주민등록번호 앞자리는 숫자 6자리");
    return;
  } else if (!regPid2.exec(f.sn2.value)) {
    alert("주민등록번호 뒷자리는 숫자 7자리");
    return;
  }

  // 관심분야 체크
  let int_cnt = 0;
  // 관심분야가 체크되면 관심분야가 0이라는 alert창을 띄우지 않기에
  // 조건문을 통해 int_cnt의 카운트를 올림
  for (let i = 0; i < f.interest.length; i++) {
    // interest의 배열을 i번 반복하며 .checked가 되어있는것을 확인하기
    if (f.interest[i].checked) {
      int_cnt++;
    }
  }

  if (int_cnt == 0) {
    alert("관심분야를 선택하세요..");
    return;
  }

  addDataToTable();
  alert("새로운 회원이 추가되었습니다!");

};

function genderChcek(f) {

  let maleC = f.sn2.value.charAt(0);
  let femaleC = f.sn2.value.charAt(0);

  if (maleC === '1' || maleC === '3') {
    f.male.checked = true;
  } else if (femaleC === '2' || femaleC === '4') {
    f.female.checked = true;
  }

};

function addDataToTable() {

  // getElementById와 querySelector를 이용해서 요소들의 밸류와 체크된 라디오,체크박스를 가져옴
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const interests = document.querySelectorAll('input[name="interest"]:checked');

  // 빈 배열을 생성해서 값들을 저장하고
  // NodeList를 순회하며 선택된 값들을 배열에 추가한 뒤 관심분야를 콤마로 구분하여 문자열로 변환한다
  let arr = [];
  interests.forEach(function (interest) {
    if (interest.checked) {
      arr.push(interest.value);
    }
  });

  const interestList = arr.join(', ');

  // 테이블의 tbody 불러오기

  // const tableBody = document.getElementById('info-tbody');
  const tableBody = document.getElementById('info-table').querySelector('tbody');

  // 테이블의 tbody부분에 새로운 행을 추가하여 요소의 속성들을 가져옴
  // <td>${gender ? gender.value : ''}</td> 삼항연산자 부분에서 gender ? 부분은
  // null값이 아닐때 즉 true일때를 gender.value를 가져오겠다는 뜻
  let newRow = `
  <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${gender ? gender.value : ''}</td>
    <td>${interestList}</td>
  </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);

  document.getElementById('signup-form').reset();

}

// 테이블의 검색 기능 구현
function searchTable() {
  // input태그에 작성 된 검색어를 가져옴
  const searchValue = document.getElementById('searchId').value.toLowerCase().trim();

  // 테이블의 모든 행을 가져옴
  const table = document.getElementById('info-table');
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(function (row) {
    // 각 행의 셀을 가져옴, td의 0번째 인덱스 즉 ID값을 가져옴
    const idCell = row.querySelectorAll('td')[0];

    // 아이디 셀의 텍스트를 소문자로 변경하고 공백제거 하여 가져옴
    const idText = idCell.textContent.toLowerCase().trim();

    // 검색어와 아이디 텍스트를 비교하여 일치 여부를 결정
    const showRow = idText.includes(searchValue);

    // 3항 연산자를 통해 showRow값이 true면 "", false면 none을 초기화해줌
    row.style.display = showRow ? "" : "none";

  });

}

function searchName() {

  const searchNameValue = document.getElementById('searchName').value.toLowerCase().trim();

  const rows = document.querySelectorAll('tbody tr');
  
  rows.forEach(function (name){
    
    const nameCell = name.querySelectorAll('td')[1];

    const nameText = nameCell.textContent.toLowerCase().trim();

    const showRow = nameText.includes(searchNameValue);

    name.style.display = showRow ? "" : "none";

  });

}

