

// 정수 n을 전달하면 1부터 n 까지 모든 짝수를 출력하는 함수
function showOddOrEvenNumber(n, delim){ // 이렇게 하나로 만들어서 호출

  for(let i = 0; i <= n; i++){
    if (i % 2 === delim) console.log(i);
  }

}

// function showOddNumber(n){
//
//   for(let i = 0; i <= n; i++){
//     if (i % 2 === 1) console.log(i);
//   }
//
// }

showOddOrEvenNumber(10, 0);
// showOddNumber(10);

function showNumber(n, code){

  for(let i = 0; i <= n; i++){

    if (code(i)){ // 어떻게 전달할것인가..?){
      console.log(i);
    }

  }

}
showNumber(50, function (n){ return n % 3 === 0; });
showNumber(50,  (n) =>  n % 3 === 0); // 화살함수 방식으로도 심필해질 수 있다.

// function xxx(n){  // ejemplo 위에 코드가 이렇게 생겼다
//   return n % 3 === 0;
// }
// const code = function (n){
//   return n % 3 ===0;
// };


function showMessage(message, howTo){
  // 공통기능.
  document.body.style.background = 'gray';

  setTimeout(() => {
    // 개별기능
    howTo(message);

    // 공통기능
    alert('하하호호');
  }, 500);


}

showMessage('메롱메롱', function(m){

  alert(m);

});



