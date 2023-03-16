
// 4~7 까지 누적합계출력

var first = +prompt('첫번째 숫자를 입력: ');
var second = +prompt('두번째 숫자를 입력: ');

if (first > second){
    var t;
    t = first;
    first = second;
    second = t;

}

var num1 = first;
var num2 = second;



var total = 0;

while (num1 <= num2 ){
    total += num1;
    num1++;
}

alert(`${fist} ~ ${second}의 누적 합: ${total}`);

