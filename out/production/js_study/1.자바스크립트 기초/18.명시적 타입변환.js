

var x = 30 , y = 40;

var z = ' ' + x + y;
console.log(z);


// 키 , 몸무게
//
// var cm = prompt('키를 입력! (cm)');
// var kg = prompt('몸무게를 입력! (kg)');
//
// var m = cm / 100;
//
//
// var bmi = kg / (m * m);
// alert(`당신은 bmi가 ${bmi} 입니다`);


function isLogin(){
    return localStorage.getItem('ACCESS_TOKEN');

}