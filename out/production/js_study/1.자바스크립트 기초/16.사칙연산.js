
    // 문제 번호
    var questionNumber = 1;

    // 정답 오답 횟사 안내
    var correctCount = 0;
    var wrongCount = 0;

    var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
    [1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
    var level = +prompt(message);

    var maxNumber;
    if(level === 1){
        maxNumber = 100;
    } else  if (level === 2){
        maxNumber = 50;
    } else if (level === 3){
        maxNumber = 20;
    } else {
        maxNumber = 9999;
    }


while (true) {

    // 문제번호

    var firstNumber = Math.floor(Math.random() * maxNumber) + 1;
    var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

    // 랜덤 부호를 결정할 정수 생성
    var markNum = Math.floor(Math.random() * 3);
    var mark;
    var realAnswer;

    // 기호를 저장할 변수
    if(markNum === 0){
        mark = '+';
        realAnswer = firstNumber + secondNumber;
    } else if (markNum === 1){
        if(firstNumber === secondNumber) continue;
        else if (firstNumber < secondNumber){
            var temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp;
        }
        mark = '-';
        realAnswer = firstNumber - secondNumber;
    } else {
        mark = 'X'
        realAnswer = firstNumber * secondNumber;
    }

    // 정답

    // 사용자에게 질문을 하고 답을 입력 받기
    var userAnswer =
        +prompt(`Q${questionNumber++}. ${firstNumber} ${mark} ${secondNumber} = ??`);

    // 게임 종료 조건
    if(userAnswer === 0){
        alert(`게임을 종료합니다.`);
        break;
    }



    if (userAnswer === realAnswer) {
        alert(`정답입니다!`);
        correctCount++;
    } else {
        alert(`틀렸습니다!`);
        wrongCount ++;
    }
} // end each game

    alert(`정답 횟수 : ${correctCount}회, 틀린 횟수 : ${wrongCount}`);