


// 객체 리터럴(값)

var dog = {
    //프로퍼티 작성
    name: '뽀삐',
    kind:'진돗개',
    age: 3,
    injection: true, //문자, 숫자가 아니어도 value 값으로 들어올 수 있음
    favorite: ['산책', '간식'], // 이런 식으로 배열에도 넣어도 됨
    hate: null,

    playWithChild: function (){

    }
};

var cat = {
    //프로퍼티 작성
    name: '콩순이',
    age: 2,
    injection: true, //문자, 숫자가 아니어도 value 값으로 들어올 수 있음
    favorite: ['낮잠자기', '방어지럽히기'], // 이런 식으로 배열에도 넣어도 됨
    kind: '블랙러시안'

};

console.log(typeof dog);

// 객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);

dog.favorite.push('꼬리흔들기');
console.log(dog);

// 프로퍼티 참조 2
console.log('==================');
console.log(dog.injection);
console.log(dog['injection']); // 이런 식으로 대괄호를 이용해야되면 ''는 필수

// key를 변수에 저장
var fc = 'favorite';
// console.log(cat.fv); undefined
// console.log(cat[fv]);

// 프로퍼티 값 수정

dog.age = 4;
console.log(dog.age);
cat.favorite[1] = '실뭉치' ;

dog['injection'] = false;
console.log(dog);

// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가
cat.owner = '박영희'; // 수정

console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('==========================');

// 프로퍼티 존재 유무 확인, 수정할때 필요함
// key 를 반드시 문자열로 표기해야됨.
var ageFlag = 'age' in cat;
console.log(ageFlag); // true or false 로 췤

// master 라는 프로퍼티가 없으면 추가해라
if(!('master' in cat)){
    cat['master'] = '김또또';
}

// var m = 'master; // 프로퍼티가 변수에 저장되어 있다면
// if(!(m in cat)){
//     cat[m] = '김또또';
// }

console.log(cat);

console.log('========================');
// 객체를 순회하는 반복문
// key 를 반복해서 추출해준다
for( var k in dog){
    // console.log(k);
    // console.log(dog.k); 위에 k 의 타입 전부가 String 형이다
    console.log(dog[k]);
}


