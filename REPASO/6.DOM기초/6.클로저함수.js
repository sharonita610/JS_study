

// 자바스크립트의 함수는 함수를 리턴 할 수 있음.
/*
function calculator(n1, n2){
  function add(){
    return n1 + n2;
  }
  return add;
}

const zzz = calculator(10 ,20);
console.log(typeof zzz);

const n = zzz();
console.log(`n : ${n}`);



const calculator = (n1, n2) => () => n1 + n2; // 위에 코드랑 같은데, 너무 오바한거고

function calculator(n1, n2){  // 이정도로는 줄일 수도 있을 것 같음.
  return () =>   n1 + n2;
}

const zzz = calculator(10 ,20);
console.log(typeof zzz);

const n = zzz();
console.log(`n : ${n}`);

 */
/*
let count = 0; // 카운팅 변수(전역변수)

// 카운트를 올리는 함수
const increase = () => ++count;

console.log(increase());
console.log(increase());
// 이 도중에 누군가가 count 값을 변경한다면

count = 999;

console.log(increase()); // 3??



const increase = () => {
  let count = 0;
  return ++count;
};
// 지역변수는 안에서만 카운팅이 된다. 함수가 한 번 호출되고 끝나면 리셋된다.
console.log(increase());
console.log(increase());
console.log(increase()); // 3???

*/
// closure 은 전역변수의 남발을 막기 위해서 사용하고, 상태 유지가 필요한것이다.stateful
/*
const increaseClosure = () => {

  let count = 0; // 지역 변수
  // 카운트를 올릴 수 있는 보조함수를 사용한다
  return() => ++count;

};

const  increaser = increaseClosure();

console.log(increaser());
console.log(increaser());

// 중간에서 count 의 개입은 불가하다.

console.log(increaser());

*/


// 즉시 실행 함수 : 정의와 동시에 호출, 1회성으로 사용하려고 할때 사용한다.
// 1회용 함수
const result = (function (n1, n2){
  return n1 + n2;
})(5,8); // 정의하고 옆에 콜(); 해준다.

console.log(result);
// ======================================================
// 61번 줄이랑 같은 코드이다.

const increase = (() => { // count의 유지만을 위해 필요한 함수니까 이름을 없애고 바로 호출한다.

  let count = 0; // 지역 변수
  // 카운트를 올릴 수 있는 보조함수를 사용한다
  return() => ++count;

})();

console.log(increase());
console.log(increase());
console.log(increase());

// ======================================================
