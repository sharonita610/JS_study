

const emp = {
  empName: '빡빡이',
  age : 29,
  hireDate: '2014-01-01',
  birthDay: '1995-12-31'
};
/*
// const {} 객체는 중괄호
const { empName, birthDay, age} = emp; // 객체는 순서는 중요치 않다 키값 중요치 않음.


// console.log(`${emp.empName}님의 나이는 ${emp.age}살이고 생일은 ${emp.birthDay}입니다`);
console.log(`${empName}님의 나이는 ${age}살이고 생일은 ${birthDay}입니다`);

 */
const {empName: en, birthday : bd, age: a} = emp;
console.log(`${en}님의 나이는 ${bd}살이고 생일은 ${a}입니다`);

const{birthDay, age, ...rest} = emp;

console.log(birthDay);
console.log(age);
console.log(rest)

// 객체 안전 복사 : 스프레드
// const copyEmp = {...emp};// 원본을 복사한다
const copyEmp = {...emp, address : '서울시', hobbies : ['놀고먹기', '낮잠']};

console.log(copyEmp);

