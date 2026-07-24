function startUpDownGame() {
  // 1~50 사이의 무작위 정답 생성
  var computerNum = Math.floor(Math.random() * 50) + 1;
  var tryCount = 0;
  var userInput;

  while (true) {
    userInput = prompt("1부터 50 사이의 숫자를 맞춰보세요!");

    // 사용자가 취소를 누르면 게임 종료
    if (userInput === null) {
      alert("게임을 종료합니다.");
      break;
    }

    var userNum = parseInt(userInput, 10);

    // 숫자가 아닌 값을 입력한 경우
    if (isNaN(userNum)) {
      alert("숫자를 입력해주세요!");
      continue;
    }

    tryCount++;

    if (userNum > computerNum) {
      alert("Down!");
    } else if (userNum < computerNum) {
      alert("Up!");
    } else {
      alert("축하합니다! " + tryCount + "번 만에 맞추셨습니다.");
      break;
    }
  }
}