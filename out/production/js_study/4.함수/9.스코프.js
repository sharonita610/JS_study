

var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용 가능

// 매개변수도 지역 스코프를 가짐
function foo(z){

    console.log(`지역변수 x 선언 전: ${x}`);
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용 가능
    console.log(y - z);

    var x = '홍길동';
    console.log(`지역변수 x 선언 후 : ${x}`);
    // return y;
}

// console.log(y);
foo(50);

console.log(`함수 호출 후 x 의 값 : ${x}`);


// 중첩함수 : 함수안에 함수를 정의

function outer(m){

    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨
    function inner(){
        log(n);
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    }

    inner();
}

var m = `global m`;

outer(`outer param m`);
