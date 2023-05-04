/* 
    숫자 두개를 입력받아서 작은숫자부터 큰 숫자까지의 총합을 구하기

    1. 첫번째 숫자는 first 로 입력받기
    2. 두번째 숫자는 second 로 입력 받기
    3. 총합을 저장 할 수 있는 total 변수를 생성 및 초기화 하기

    4. 입력받은 첫번째 숫자가 두번째 입력 받은 숫자보다 큰 경우에 이 두 수를 스위치 해줘야한다.
       그래야 작은수 <= 큰 수로 계산이 가능하기 때문이다.
    4-1 두 수를 바꾸려면 첫번째 값을 미리 덜어내기 위한 다른 변수도 필요하다  var bin

    
*/

var first = +prompt('첫번째 숫자를 입력: '); 
// 입력 받은 값을 변수 first 에 받고 prompt 앞에 '+' 를 입력해서 string 형을 var 형으로 변환해준다
var second = +prompt('두번째 숫자를 입력: '); // 이하 동일 just var name second
var total = 0;
var bin;

var one = first; // 마지막 출력시에 변수명 사용을 위해 값을 잃으면 안된다.
var two = second;

if(one > two){
    bin = one; 
    one = two;
    two = bin;
}

while (one <= two ){
    
    total += one;

    one++;
}

alert(`${first} 과 ${second} 의 총합은 ${total} 입니다.`)