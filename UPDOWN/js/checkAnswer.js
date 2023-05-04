import gameData from "./gameData";

function caseUp($icon) {

  // 1. #begin 의 숫자값이 클릭값 +1 로 변경
  document.getElementById('begin').textContent = +$icon.dataset.iconNumber +1;

  // 2. #down .selected 제거, #up에 추가
  document.getElementById('down').classList.remove('selected');
  document.getElementById('up').classList.add('selected');

  // 3. 자기 자신 아이콘 포함 이전형제들 모두 삭제
  const $numbers = document.getElementById('numbers');

  // iterator 디자인 패턴
  let $delTarget = $icon;

  while($delTarget) {

    const $nextTarget = $delTarget.previousElementSibling;
    $numbers.removeChild($delTarget);
    $delTarget = $nextTarget;

  }
}

function caseDown($icon) {

  // 1. #begin 의 숫자값이 클릭값 -1 로 변경
  document.getElementById('end').textContent = +$icon.dataset.iconNumber -1;

  // 2. #up.selected 제거, #down 에 추가
  document.getElementById('up').classList.remove('selected');
  document.getElementById('down').classList.add('selected');
  // 3. 자기 자신 아이콘 포함 다음형제들 모두 삭제
  const $numbers = document.getElementById('numbers');
  // iterator 디자인 패턴
  let $delTarget = $icon;

  while($delTarget) {

    const $nextTarget = $delTarget.previousElementSibling;
    $numbers.removeChild($delTarget);
    $delTarget = $nextTarget;

  }


}

function correctAnswer($correctIcon) {
  // 1. finish 아이디 박스에 class 'show' 부여
  const $finish = document.getElementById('finish');
  $finish.classList.add('show');


  // 2. #numbers 클릭 이벤트 해제
  document.getElementById('numbers').onclick = null;

  // 클릭한 아이콘에 id 'move' 부여
  $correctIcon.setAttribute('id', 'move');


}

// 정담을 검증하는 함수
function checkNumber($target){

  const {secret, answer} = gameData;

  // 실제 정답이랑 선택값을 비교
  if(secret === answer) { //정답인 경우
    correctAnswer($target);
  } else if (secret > answer){ // up인 경우

    caseUp($target);

  } else { // down인 경우

    caseDown($target);

  }


}
export {caseDown, caseUp, correctAnswer};