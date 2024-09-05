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
    if(f.interest[i].checked) {
      int_cnt++;
    }
  }

  if(int_cnt == 0){
    alert("관심분야를 선택하세요..");
    return;
  }



}