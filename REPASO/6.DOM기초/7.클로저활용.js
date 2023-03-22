// ()() 앞에 소괄호는 정의, 뒤에는 호출용,
// const increase = (function (){})();

/*
const increase = (() => { // function 을 지우고 화살표를 줘도 된다.
  let count = 0;
  return () => ++count;
})();

const decrease = (() => { // function 을 지우고 화살표를 줘도 된다.
  let count = 0;
  return () => --count;
})();

console.log(increase());
console.log(increase()); // 이 둘의 카운터의 영역은 완젼히 다르다. 카운터가 하나만 있어야 적용이 된다
console.log(decrease());

 */
/*

function counterClosure(){

  let count = 0;

  // 이렇게 안에 두개를 만들어준다.
  function increase(){
    return ++count;
  }
  function decrease(){
    return --count;
  }

  return{ // key 랑 value 이름이 같으면 increase : increase 이렇게 쓸 필요가 없다.
    increase,
    decrease
  }; // 객체는 ; 을 붙인다

}

const counter = counterClosure(); // return{increase,decrease}을 받아서 counter 은 객체이다

const increase = counter.increase; // 객체에 담아 둔 함수를 쓰기 위해 담는다.
const decrease = counter.decrease;

// 이제 출력하면
console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1 이 된다

 */
/*
const counterClosure = () => {

 let count = 0;

 // const increase = () => ++count; 이 두개는 바로 밑에 합쳐준다
 // const decrease = () => --count;

 return{ // key 랑 value 이름이 같으면 increase : increase 이렇게 쓸 필요가 없다.
   increase: () => ++count,
   decrease: () => --count
 }; // 객체는 ; 을 붙인다

}; // 값이 되기 때문에 ; 을 붙여준다

ㄴ 얘네는 바로 counter 상수에다가 넣어준다. ()(); 중에 첫 괄호에 싹 넣어줌
 */
/*
// =========== 거의 리펙토링 끝판왕 수준이다.
const counter = (() => {

  let count = 0;

  return {
    increase: () => ++count,
    decrease: () => --count
  };
})();

const { increase, decrease} = counter;

// 이제 출력하면
console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1 이 된다

*/
/*
function counterWithCbClosure(){
  let count = 0;

  function process(callback){
    return count = callback(count); // 하고싶은 것 넣어서 쓰도록, 대신 카운터는 적용해줄게
    // callback 함수 값을 바깥쪽 카운트에 적용되도록 이렇게 정의해주면 됨
  }

  return process;
}

const counter_ = counterWithCbClosure(); // counter_ 는 함수가 된다. process 라는 함수를 받았기 때문

console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));
console.log(counter_(c => c **= 2));

*/
// 위에거 리팩토링하면 이렇게 된다.
const counter_ = (() => {
  let count = 0;
  return callback => count = callback(count);
})();


console.log(counter_(c => ++c));
console.log(counter_(c => c += 3));
console.log(counter_(c => c **= 2));

