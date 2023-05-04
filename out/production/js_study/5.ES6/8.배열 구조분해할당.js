

const userNames = ['김철수', '강감찬', '박영희'];

const[kim, kang, park] = userNames;

console.log(kim);
console.log(kang);
console.log(park);


const [firstObj] = [{ id: 1 }, { id: 2 }, { id: 3 }]
                   .filter(obj => obj.id >= 2);

console.log(firstObj);

// 변수 교환기
let first = 10, second = 20;

[second, first] = [first, second]; // 둘을 배열에 넣어둔다.

console.log(first);
console.log(second);

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고 싶다.
const numbers = [1, 3, 5, 6, 9, 11];

const[one, three, ...others] = numbers; // 새로운 변수에 각 값을 저장한다.


/*
const copyNumbers = numbers.slice(); // copy 하는 방법

const one = copyNumbers.shift(); // 맨 앞에것 뽑아내기
const three = copyNumbers.shift();
const others = copyNumbers;
*/
console.log(`===========`);

console.log(one);
console.log(three);
console.log(others);
console.log(numbers);



// 스프레드로 배열 간편 복사
const foods = ['감튀', 'DQPC', '징거버거'];

// const  copyFoods  = foods 주소복사
const copyfoods = [...foods]; // 실제 데이터 자체 복사

console.log(copyfoods);










