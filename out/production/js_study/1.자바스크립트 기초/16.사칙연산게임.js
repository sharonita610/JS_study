alert(`재미있는 사칮연산 게임 \n [즐겁게 풀다가 지겨우면 0을 눌러여 \n ====================`);

var change;
var result;

while (true) {

        var randomX = Math.floor(Math.random() * 10) + 1;
        var randomY = Math.floor(Math.random() * 10) + 1;
        var quest = Math.floor(Math.random() * 3) + 1;

        // Y랜덤번호가 X랜덤보다 많으면 체인지.
        if (randomY > randomX) {
            change = randomY;
            randomY = randomX;
            randomX = change;
        }

        // var answer = +prompt(` Q${i}.   ${x} - ${y} = ?`);
        var answer = +prompt(` Q${i}.   ${x} - ${y} = ?`);

        // 랜덤 번호를 사칙연산으로 바꿔준다.
        // 1이나오면 더하기, 2는 빼기, 3은 곱하기
        while (true) {
            if (quest === 1) {
                result = randomX + randomY;
                answer = prompt(`Q${i}.   ${x} + ${y} = ?`);
                break;
            } else if (quest === 2) {
                quest = alert('-');
                break;
            } else {
                quest = alert('*');
                break;
            }
        }

        switch(quest) {
            case 1 :
                answer = prompt(`Q${i}.   ${x} + ${y} = ?`);
                result = randomX + randomY;
                if (answer === result) {
                    alert(`정답입니다`);
                    continue;
                } else {
                    alert(`틀렸습니다`);
                }
                break;
            case 2 :
                answer = prompt(`Q${i}.   ${x} - ${y} = ?`);
                result = randomX - randomY;
                if (answer === result) {
                    alert(`정답입니다`);
                    continue;
                } else {
                    alert(`틀렸습니다`);
                    continue;
                }
            case 3 :
                answer = prompt(`Q${i}.   ${x} * ${y} = ?`);
                result = randomX + randomY;
                if (answer === result) {
                    alert(`정답입니다`);
                    continue;
                } else {
                    alert(`틀렸습니다`);
                }
                break;

        }



        // if (answer === result) {
        //     alert(`정답입니다`);
        //     continue;
        // } else if (answer === 0) {
        //     alert(`종료합니다!`);
        //     break;
        // } else {
        //     alert(`틀렸어요`);
        //     continue;
        // }


}