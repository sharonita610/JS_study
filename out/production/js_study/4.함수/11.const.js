
// const PI = 3.14159265; // const는 선언과 동시에 초기화를 해줘야됨.

let kim = {
    name : '김철수',
    age : 25,
};

kim.name = '김칠리'; // 이거는 위에 김철수의 이름만 변경 된것이다.

kim = { // 그런데 이거는 동명이인이 생성된 것이다
    name: '김철수',
    age : 25,
};

const a = 10;
const b = 20;

// for(const i = 0; i < 5; i++){
//    모든 선언은 const 로 처리하고 변경 해야되는 값들만 let 으로 처리하면 된다.
// }

