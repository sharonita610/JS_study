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

  for (const user of userList) {
    wannaSay(user);
  }

}

alertUserInfo(u => console.log(`나는 ${u.username}님이시다 우하하하!!@1`));


// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
userList.forEach(user => {
  console.log(user.address);
}); // forEach는 기본으로 매개변수에 함수를 요청한다.

const numbers = [10, 20, 30, 40];
//
// // let total = 10;
// for(let n of numbers){
//   total += n;
// }

// let total = 0;
// numbers.forEach (n) =>
// {
// }otal  += n;
// console.log(total);}


// 취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘
function filter2Hobby() {

  //새로운 배열 생성
  const filteredArray = [];

  for (const user of userList) {
    if (user.hobbys.length === 2) {
      filteredArray.push(user);
    }
  }

  return filteredArray;
}

// 특정 필터조건에 의해 필터링하는 함수
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


// const newArray = filter2Hobby();
// console.log(newArray);

// 서울사는 사람들만 필터링해서 새로운 배열에 담아줘

const newArray = filter(u => u.hobbys.length >= 3);
console.log(newArray);


// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log(`==============`);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0);
console.log(newArr);

const user1 = userList.filter(user => user.account === 'abcd1234');
console.log(user1);

// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환

const doubles = numbers.map(n => n ** 2);
console.log(doubles);


const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.username);
console.log(userNames);


//userList 에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(callback) {

// 이름만 담을 배열
  const mappedArray = [];
  for(const user of userList){
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

const userNames2 = myMap(user =>  user.username);
console.log(userNames2);

const userNames2 = myMap(user => ({
  userName : user.username,
  address : user.address,
}));

const appleBasket = [
  {
    color : 'green',
    sweet : 13
  },
  {
    color : 'red',
    sweet : 15
  },
  {
    color : 'red',
    sweet : 6
  },
  {
    color : 'red',
    sweet : 7
  },
  {
    color : 'green',
    sweet : 9
  },
  {
    color : 'green',
    sweet : 6
  },

];


// 사과 중 녹색이면서 당도가 9이상인 사과만 선별하여
// 이 사과는 ~ 색이며 당도가 ~ 입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.



const filteredApples =
  appleBasket.filter(apple => apple.color === 'green' && apple.sweet >= 9);
// 필터하고 난 뒤 바로 맵핑할 수도 있다.
const mappedApples =
filteredApples.map(apple => `이사과는 ${apple.color}색이면서 당도는 ${apple.sweet} 입니다`)

console.log(filteredApples);
console.log(mappedApples);


console.log(`===============`);

//userList에서 서울사는 user들의 첫번째 취미만 배열에 모아서 리턴

