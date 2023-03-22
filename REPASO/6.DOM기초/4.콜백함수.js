

// 정수 n을 전달하면 1부터 n 까지 모든 짝수를 출력하는 함수


// function showOddNumber(n){
//
//   for(let i = 0; i <= n; i++){
//     if (i % 2 === 1) console.log(i);
//   }
//
// }
// function showEvenNumber(n){
//
//   for(let i = 0; i <= n; i++){
//     if (i % 2 === 0) console.log(i);
//   }
//
// }
// showOddNumber(10);

function showOddOrEvenNumber(n, delim){ // 이렇게 하나로 만들어서 호출

  for(let i = 0; i <= n; i++){
    if (i % 2 === delim) console.log(i);
  }

}
showOddOrEvenNumber(10, 0);

function showNumber(n, code){

  for(let i = 0; i <= n; i++){

    if (code(i)){ // 어떻게 전달할것인가..?
      console.log(i);
    }

  }

}

// 자바스크립트는 함수를 값으로 사용이 가능해서 이렇게 사용될 수 있는 것이다.
showNumber(50, function (n){
  return n % 3 === 0;
});
showNumber(50, function (n){return n % 3 === 0;}); // 바로 위에 코드를 이렇게 한줄로 쓸 수 있다.
showNumber(50,  n =>  n % 3 === 0); // 화살함수 방식으로도 심플 해 질 수 있다.

// function xxx(n){  // ejemplo 위에 코드가 이렇게 생겼다
//   return n % 3 === 0;
// }
// const code = function (n){
//   return n % 3 ===0;
// };

function test(n){
  return n % 2 === 0;
}

showNumber(30,test);
// 바로 위에 test 함수도 사용이 가능한것이다.
// 대신 코드를 변경하려면 test 함수에서 처리해야된다


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



