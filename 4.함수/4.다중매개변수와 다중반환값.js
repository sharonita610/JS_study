

// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매게변수로 사용
//[배열, 객체]

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수.

//스프레드(ES6)
// function addAll(numbers){
function addAll(...numbers){ // 앞에 ...을 붙이혐 r1에서 호출할때 [] 이거 없어도 된다
    var total = 0;

    for(var n of numbers){
        total += n;
    }
    return total;
}

var r1 = addAll(1,3,5,6);

console.log(r1);



function foo(arr1,arr2){

}

foo([10,20], [500,1000,1500]);

console.log(`============`);

// 함수의 리턴값은 언제나 하나
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶어

function  operateAll(n1, n2){
    // var addResult = n1 + n2; 한 번 사용할 애들은 변수에 담을 필요가 없다
    // var subResult = n1 - n2;
    // var multiResult = n1 * n2;
    // var divideResult = n1 / n2;

    // var resultSet = [ 얘도 필요 없다.
    //     n1 + n2,
    //     n1 - n2,
    //     n1 * n2,
    //     n1 / n2
    // ];
    return {
        // return 은 배열 또는 객체 중에 가능하다. 순서가 변경된다면 객체에 담아서 result.plus 식으로 사용
        plus: addAll(n1, n2), // 이런 식으로 이미 있는 함수는 재사용 할 수 있음
        minus : n1 -n2,
        multiply : n1 * n2,
        divide : n1 / n2
};
}

var result = operateAll(10,5);
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`누눗셈결과: ${result.divide}`);

// var r2 = operateAll(100,4)[1];