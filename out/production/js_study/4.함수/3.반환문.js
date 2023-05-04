

function add (n1,n2){

    return n1 + n2; // 탈출문
}

// 반환값 : 함수 호출 이후에 함수밖으로 전달되는 값
var r1 = add(5,7); // 12가 반환 값이 된다.


add(r1 * r1 * 2);

// 안쪽으로 쭉 가서 실행, 같은 레벨 끼리는 왼쪽부터 실행
console.log(add (add(2,3), add(3,4), add(6,2)));
// var r2 = add (add(2,3), add(3,4), add(6,2));

//리턴이 없는 함수 (void 함수)

function multi(n1, n2){
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}
 // 리턴이 없는 함수는 변수에 담지 말고, 다른 함수에 인수로도 전달하면 안된다.
var r3 = multi(10,3);

add(r3, 10); // multi에 return 이 없어서 출력이 안된다.


 function callName(nickName){

    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if(prohibits.includes(nickName)){
        console.log(`잘못된 닉네임은 인사를 못해줘 이놈앙`);
        return;
    }
    console.log(`${nickName}님 안녕하세요!`);
}

callName('바둑이');


 function stopLoop(){
     while (true){
         var flag = prompt(`명령어를 입력하세요!`);
         if(flag === '멈춰'){
             // return; // 함수 자체를 끊는다
             break; // 반복문만 끊는다
         }
         alert(flag);
     }
     alert(`수고용~`);
 }

 stopLoop();