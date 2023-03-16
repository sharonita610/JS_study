
// 1. 양의 정수 1개 입력 받기 

var n = prompt('양의 정수를 입력 : ');
// 9 +-+- 합쳐서 9
// 18 +-+- 18개 나오기
// 2. 입력된 숫자만큼 +-를 반복 출력해야됨 


var k =1;
var resultMark = '';
while (k <= n ){
    if (k % 2 ===1 ){
        resultMark += '+'
    }else {
        resultMark += '-'
    }

    k++;
}

alert(resultMark) ;
// 2-1입력된 숫자만큼 반복해야됨
// 2-2 홀수번째 반복에는 +가, 짝수에는 -가 붙여야함
// 조건에 따라 다르게 해야된