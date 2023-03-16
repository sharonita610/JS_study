var lifeOption = +prompt(`~~~~~ 재미있는  UP & DOWN 게임 ~~~~~ 
                             \n[난이도를 설정하세여!!!] 
                             \n[ 1. 상(기회 3번)  |  2. 상(기회 6번)  |  3.하 (기회 10번) ]`);


console.log(flag);

while (true) {
    var number;
    var life;
    var randomNum = Math.floor(Math.random() * 100) + 1;

    if (lifeOption === 1) {
        life = 3;
    } else if (lifeOption === 2) {
        life = 6;
    } else if (lifeOption === 3) {
        life = 10;
    }
    var count = life;

    // 입력 최소값, 최대값
    var minValue = 1, maxValue = 100;

    while (true) {


        for (var i = life; i > 1; i--) {
            number = +prompt(`[${minValue}~${maxValue} 사이의 무작위 숫자를 ${life--}번 안에 맞춰보세요!!!]`);

            // 입력이 범위 안의 값인가?
            if (number < minValue || number > maxValue) {

                alert(`범위 안의 값을 입력하세요!`);
                continue;
            }

            if (number === randomNum) {
                alert(`성공! ${count - life}번만에 맞췄습니다!`);

                break;
            } else if (number > randomNum) {
                alert(`DOWN!! \n 기회가 ${life}번 남았습니다.`);
                maxValue = number - 1;

                continue;
            } else if (number < randomNum) {
                alert(`UP!! \n 기회가 ${life}번 남았습니다.`);
                minValue = number + 1;
                continue;
            } else if (number === 0) {
                alert(`종료합니다`);
                break;
            }
            alert(`기회를 모두 소진 했습니다. GAME OVER!!!`);
            var flag = confirm(`게임을 다시 하실래요?`);
            break;
        }
        break;
        var flag = confirm(`게임을 다시 하실래요?`);
    }
}
