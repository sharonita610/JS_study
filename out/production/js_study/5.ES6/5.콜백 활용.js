const userList = [
  {
    account: 'abcd1234',
    username: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    username: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '축구']

  },
  {
    account: 'park1234',
    username: '주차왕',
    job: '발렛파킹',
    address: '경기도 수원',
    hobbys: ['족구', '축구', '테니스', '영화감상']

  },
  {
    account: 'fire',
    username: '불꽃남자카리스마',
    job: '게이머',
    address: '역삼동',
    hobbys: ['독서', '테니스']

  },
];

// 회원 목록에서 회원 정보를 출력하는 함수
function alertUserInfo(wannaSay) {

  for (const user of userList) {// userList 에서 user을 하나씩 꺼낸다.
    wannaSay(user); // user을 돌려준다. wannaSay에서 편하게 사용하라는 뜻
    // console.log(message);
  }

}

// alertUserInfo(function (u){
//   // 받는 파라미터는 내 마음대로 명시하면 된다. user 을 줬어도 내가 변경하고 싶으면 변경 가능함
//   console.log(`나는 ${u.username} 이다아아ㅏ`);
// });
alertUserInfo(u => console.log(`나는 ${u.username}님이시다 우하하하!!@1`));
// 위에 코드를 화살표함수로 처리하면 이렇게 짧게 처리된다.

//=======================================================
// 자바스크립트에서 이미 만들어 둔 함수도 사용 가능하다

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌, 사용은 내 마음대로 하면 된다.

// userList.forEach(()=>{}); 고차 팜수 기본 문법.
userList.forEach(user => { // for of 문 대신 이렇게 사용한다.
  console.log(user.address);
});
// forEach는 기본으로 매개변수에 함수를 요청한다.

const numbers = [10, 20, 30, 40];

// let total = 0;
// for (let n of numbers) {
//   total += n;
// }
//
// console.log(`total: ${total}`);
console.log(`==================`);
let total = 0;
// numbers.forEach((n)=>{ // numbers 배열의 하나하나를 뽑겠다. 그리고 하나하나 꺼내서 total 에 넣을거다
//   total += n;
// });
numbers.forEach(n => total += n ); // 바로 위에 코드를 이렇게 짧게 만들 수 있다.
console.log(`total: ${total}`);


///////// 필터링 하는 방법


// 취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘
function filter2Hobby() {

  //새로운 배열 생성
  const filteredArray = [];

  for (const user of userList) { // userList 를 user 로 만들어
    if (user.hobbys.length === 2) { // 그리고 하비의 길이가 2개인 사람,
      filteredArray.push(user); // 즉 취미가 2개인 사람을 filteredArray에 넣어
    }
  }

  return filteredArray; // 그리고 밖으로 빼내기 위해 return 을 해준다
}

console.log(`===filter2Hobby 호출===`);


const newArray = filter2Hobby(); // 함수를 const newArray 라는 변수에 저장한다
console.log(newArray);  // 그리고 함수에 있는 정보를 출력한다. 즉 filter2Hobby 에는 방금 만든 새 배열이 나오는거다


console.log(`===filter2Hobby출력 종료===`);

//=======================================
/*
  서울 사는 회원들만 필터링 해서 배열에 담아줘
*/

function filterSeoul() {

  //새로운 배열 생성
  const livingSeoulArray = [];

  for (const user of userList) { // userList 를 user 로 만들어
    if (user.address === "서울") { // 그리고 user.address 가 서울인 사람,
      livingSeoulArray.push(user); // 서울에서 살면 서울 배열에 넣어
    }
  }

  return livingSeoulArray; // 그리고 밖으로 빼내기 위해 return 을 해준다
}

console.log(`===seoulLiving 출력===`);
const seoulLiving = filterSeoul();
console.log(seoulLiving);
console.log(`===seoulLiving 출력완료===`);

/*
방금 filter 함수를 만들고 처리하면서 나는 왜 filter 함수를 사용하면서 콜백을 활용하지 않지? 라는 의문을 갖게 되었다
학원에 가서 선생님께 질문을 해야지 했었는데, 바로 뒤에 function filter()을 설명해주시면서, 같은 작업을 할 건데,
반복 구간을 계속해서 적는것이 아닌, 콜백 함수를 만들어 바뀌는 특정 구간에만 사용 할 수 있게 한다는 말에 바로 수긍이 되었다.
*/

// 특정 필터조건에 의해 필터링하는 함수
function filter(condition) { // 3. 대신 나한텐 너가 원하는 condition 을 꼭 알려줘

  //새로운 배열 생성
  const filterArray = [];

  for (const user of userList) { // 1. userList 를 user 로 만들어
    if (condition(user)) { // 2. if 절의 조건, 너는 뭘 원하는지 condition 에다가 적어서 알려줘, user 줄테니까 가져가고
      filterArray.push(user); //
    }
  }

  return filterArray; // 그리고 밖으로 빼내기 위해 return 을 해준다
}

console.log(`===newfilterArray 출력===`);
const newFilterArray = filter((u) => { // filter 함수() 괄호에 내 조건들(condition)을 적어서 넣는다.
  // 그것을 const 상수에 넣어서 그대로 출력을 하면 된다.
  return u.hobbys.length >= 3; // 조건을 적을 때는 조건식을 적고 return을 하거나 안에서 console 로 바로 출력할 수 있다.
});
// 위에 const newFilterArray 이후 filter 함수를 더 간략하게 쓰는 방법은
// filter(u => u.hobbys.length >=3); 이게 끝이다. 일반 괄호, 중괄호 다 생략이 가능하다.
console.log(newFilterArray);
console.log(`===newfilterArray 출력 완료===`);

/* 이건 수업 시간에 적었던 코드인데, 밤에 복습할때는 새로 적어본다고 주석처리해뒀다.
function filter(condition) {

  //새로운 배열 생성
  const filteredArray = [];

  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }

  return filteredArray;
}

*/

///////////////////////////





// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log(`===js 가 만들어 둔 배열 고차함수 filter===`);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0); // 첫번째 파라미터에 array에서 하나씩 꺼내서 넣고 뒤에 조건을 적는다.
console.log(newArr);
// js 에서 만들어 둔 함수를 사용하려고 하면 numberArray(생성해 둔 배열에서) . filter 을 사용하는것이다.
// 우리가 아까 만든 것은 그냥 filter function을 상수에 넣은것이었다.

const user1 = userList.filter(user => user.account === 'abcd1234');
console.log(user1);

console.log(`===js 가 만들어 둔 배열 고차함수 filter 종료 ===`);

// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환

console.log(`===js 가 만들어 둔 배열 고차함수 map===`);
const doubles = numbers.map(n => n ** 2);
console.log(doubles);

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.username);
// userList 안에는 user의 전체 정보를 가지고 있다. map(user.username)이라고 하니까 이름만 나온다.
console.log(userNames);


console.log(`===js 가 만들어 둔 배열 고차함수 map 종료===`);
/*
      filter 이랑 map 의 차이를 따져보면
      filter : 말 그대로 필터링이다. 원래 배열에서 조건에 따라 이것 저것 필터 해가면서 10개 중에 몇개만 가져와서 사용한다.
      map : 은 맵핑으로 배열의 원소가 10개이면 반환 값도 10개이다. 1~10 을 n+ 하면 각각이 1씩 증감되어 출력된다.
 */


console.log(`\n`);
console.log(`===혼자서 만들어보는 myMap 함수===`);

// userList 에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(user) {

  const userNameArray = [];

  for(const user of userList){
    userNameArray.push(user.username);
  }
  return userNameArray;
}


const userNames2 = myMap();
console.log(userNames2);

console.log(`===혼자서 만들어보는 myMap 함수 끝!===`); // 성공했다.

console.log(`===선생님이 말하는 myMap 콜백함수===`);

// userList 에서 원하는 프로퍼티 값을 매핑하는 함수
function teacherMap(callback) { // 4. 여기에 너의 조건을 적어서 보내봐바 내가 for 문 안으로 넣어는 줄게!

  // 이름 담을 배열을 생성한다
  const userNameArray = [];

  for(const user of userList){
    userNameArray.push(callback(user));  // 3. 그럼 너가 커스터마이징 해. 대신 내가 만들어 둔 user 은 줄게
    // 1. 여기 () 안이 변경 될때 매 번 어떻게 할것인가.
    // 2. 조건은 변경 될 수 있기 때문에 콜백 함수를 사용하는 것이다
  }
  return userNameArray;
}


const userAddress1 = teacherMap(user => user.address);
console.log(`유저들의 주소 : ${userAddress1}`);
console.log(`===선생님이 말하는 myMap 콜백함수===\n`);
console.log(`=== 내 마음대로 연습해보는 콜백함수===`);

const userJob = teacherMap(user => user.job);
console.log(`유저들의 직업 : ${userJob}`);
/*
나는 이 예를 서울에 살면서 취미가 2개 인 사람을 찾고 싶었는데, 불린 형식으로 출력되는 것을 봤다.
그 이유를 알고 봤더니 && 연산은 불린 형식으로 출력을 해주기 때문이었다.
그래서 불린 형식이 아닌 {} 여기다가 내 조건식을 한 번 더 적어서 요청해야되는 것이다.
const userCondition = teacherMap((user) => {
  return user.address === '서울' && user.hobbys.length >= 2;
});

*/
// 밑에 함수 map 은 내가 원하는 이용자만 뽑아내는 것이다.
const userCondition = teacherMap((user) => ({ //조건식을 쓸 때 괄호 갯수를 체크하자. teacherMap((user)=>({}));
  userAddress: user.address,
  userHobby: user.hobbys.length >= 3, // 이건 why still boolean??? 쌤한테 여쭤보기, 혹시 이런 조건은.. filter 에서만 가능한가?
}));
console.log(userCondition);

console.log(`=== 내 마음대로 연습해보는 콜백함수 fin ===\n`);


const appleBasket = [
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 15
  },
  {
    color: 'red',
    sweet: 6
  },
  {
    color: 'red',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 9
  },
  {
    color: 'green',
    sweet: 6
  },

];


// 사과 중 녹색이면서 당도가 9이상인 사과만 선별하여
// 이 사과는 ~ 색이며 당도가 ~ 입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.
console.log(`=== apple 배열 연습하기 ===`);

const filteredApples =
  appleBasket.filter(apple => apple.color === 'green' && apple.sweet >= 9);
  // 처음은 appleBasket에서 초록색 사과랑 당도 9 이상인 사과를 필터링 했다.

  // 필터하고 난 뒤 필터 당한 filteredApple 상수를 바로 맵핑할 수도 있다.
const mappedApples =
  filteredApples.map(apple => `이사과는 ${apple.color}색이면서 당도는 ${apple.sweet} 입니다`);

//console.log(`필터 된 사과들 : ${filteredApples}`); // 밑에는 잘 나오는데, 이렇게 ${} 사용하면 왜 출력이 안될까..? 궁금하네
console.log(`필터 된 사과들 :`, filteredApples); // 위에 처럼 문자열에 ${}을 사용하면 타입이 나타난다. 그래서 문자열 밖에서 , 를 사용해야된다.
console.log(filteredApples);
console.log(`필터 된 사과 맵핑 : ${mappedApples}`);

// 하기 방식으로 하면 필터와 맵핑을 바로 할 수 있다. 출력할때도 filter + mapping 된 상태의 최종본만 보여준다고 생각하면 된다.
const mappedApples1 =
  appleBasket
    .filter(apple => apple.color === 'red' && apple.sweet >= 10) // 빨간 사과이면서 당도는 10 이상인
    .map(apple => `이사과는 ${apple.color}색이면서 당도는 ${apple.sweet} 입니다`);

console.log(`한번에 필터와 맵핑을 끝낸 사과들 : ${mappedApples1}`);


console.log(`===============\n`);

//userList에서 서울사는 user들의 첫번째 취미만 배열에 모아서 리턴
console.log(`== 셀프 연습 칸  ===`);

const seoulLivingFiltered = userList.filter(user => user.address === '서울' && user.hobbys);

const seoulLivingMapped =
  seoulLivingFiltered.map(user => `서울에서 사는 사람은 ${user.username} 이고 취미는 ${user.hobbys[0]} 입니다`);
console.log(seoulLivingMapped);

// 내가 한 것은 서울에 사는 사람과 취미를 찾았다.

console.log(`== 셀프 연습 칸 종료  === \n`);

console.log(`=== 선생님의 해설 ===`);

userList // userList는 배열 값이4개이고 속성이 5개로 [{5},{5},{5},{5}] 이렇게 생겼다.
  .filter(user => user.address === '서울') // 서울 사는 사람 필터를 하면 [{5},{5},] 이렇게 두개만 남는다
  .map(user => user.hobbys[0])// ['','',''] 이젠 이렇게 남고
  // 필터링 된, 서울사는 사람들의 첫번째 취미를 맵핑했다.
  .forEach(hobby => { // 그리고 지금은 총 갯수가 몇개인지 모를 hobby만 출력을 해야되기 때문에 forEach문을 사용해서 바로 출력했다.
    console.log(`회원의 첫번째 취미는 ${hobby} 입니다`);
  });
console.log(`=== 선생님의 해설 종료===`);
