// 난이도를 선택하는 기능
function selectGameLevel() {

  const HIGH = 1,
    MIDDLE = 2,
    LOW = 3;

  // 사용자의 초기 입력 기회
  let INIT_COUNT;

  while (true) {

    const level = +prompt('난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]');

    if (level === HIGH) {
      INIT_COUNT = 3;
    } else if (level === MIDDLE) {
      INIT_COUNT = 6;
    } else if (level === LOW) {
      INIT_COUNT = 10;
    } else {
      alert('난이도를 숫자로 다시 입력하세요!');
      continue;
    }
    return INIT_COUNT;
  }
}

//게임 데이터를 생성하는 함수
function makeGameData() {

  const initCount = selectGameLevel();
  return {
    // 실제 정답
    secret: Math.floor(Math.random() * 100) + 1,
    min: 1,
    max: 100,
    // 난이도를 선택하는 함수 호출
    // 사용자의 남은 입력 기회
    countDown: initCount,
    //사용자의 초기 입력 기회
    initCount: initCount,
    // 사용자의 입력값. 시작하면서 null을 사용함
    answer: null,
    //게임 종료 플래그
    gameEndFlag: false,
  };
}

// 사용자가 답을 입력하고 검증하는 함수
function inputAnswerAndValidate(gameData) {
  // 사용자 입력답
  const answer = +prompt(`숫자를 입력하세요! [${gameData.min} ~ ${gameData.max}]`);

  // 입력이 범위안의 값인가?
  if (answer < gameData.min || answer > gameData.max) {
    alert('범위 안의 값을 입력하세요!');
    return false;
  }
  gameData.answer = answer;
  return true;
}


// 한게임이 진행되는 함수
function runUpDownGame(gameData) {
  // gameData 디스트럭처링
  // 디스트럭처링은 사본을 복사하는거라 변경해도 원본에 적용되지 않는다.
  const{countDown, secret, answer, gameEndFlag} = gameData;
  while (true) {

    if (!inputAnswerAndValidate(gameData)) continue; // 입력값이 틀렸으면 continue

    gameData.countDown--;

    if (secret === answer) {
      alert(`정답입니다! ${gameData.initCount - gameData.countDown}번만에 맞췄습니다!`);
      gameData.gameEndFlag = true;
      break;
    } else if (secret > answer) {
      alert(`UP!!`);
      gameData.min = answer + 1;
    } else {
      alert(`DOWN!!`);
      gameData.max = answer - 1;
    }

    // 추가 게임 종료 조건
    if (countDown <= 0) {
      alert(`응 너 졌어~~~ 정답은 ${secret}이었음ㅋㅋㅋ`);
      gameData.gameEndFlag = true;
      break;
    } else {
      alert(`${countDown}번의 기회가 남았습니다.`);
    }
  }
}


function startGame() {
  // end each game loop
  while (true) {

    // 게임데이터 생성
    const gameData = makeGameData();

    // 하나의 게임 실행
    runUpDownGame(gameData);


    if (gameData.gameEndFlag) {
      var exitFlag = confirm('한 판더?');
      if (!exitFlag) {
        alert('수고하셨습니다!');
        return;
      }
    }

  }// end all game loop
}

// 게임 실행 코드
startGame();