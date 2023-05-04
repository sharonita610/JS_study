




/*
    math.random  = 0<1
    math.random () *1 0~ 100

    math.floor(math.random()*100) -> 정수로 출력하겠다

     math.floor(math.random()*100) +1 해야 1~100 사이가 출력된다

     공식 : x 이상 y 이하의 정수 난수

     Math.floor (Math.random() * (y - x + 1)) + x
*/ 

var age = Math.random();


// var age = +prompt('당신의 나이는??');

// alert(`내 나이: ${age +3 }살`);

if (age >19) {
    alert('성인입니다');
    alert('주류를 구매 할 수 있습니다');
}else{
    alert('미성년자입니다');
    
}