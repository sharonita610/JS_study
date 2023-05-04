/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [
        {
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
};

// 회원 목록 배열을 꺼내놓기
var userList = userInfo.userList;
while (true) {

// 입력 받기
    var inputAccount = prompt(`사용자 계정을 입력 해주세요`);

    var foundUser = null;

// 회원 목록을 반복하여 입력한 계정명과 일치하는 객치를 탐색
    for (var user of userList) { // 나는 in으로 입력해서 처리 안됐다/
        console.log(user.account);

        if (inputAccount === user.account) {
            console.log(`회원가입했다!`);
            // console.log(user.password); 두개 다 필요하니까 밖에다가 빼놓기
            // console.log(user.account);
            foundUser = user; // 비어있었던 foundUser 에 user 의 정보를 담았다
            break;
        }
    }

// console.log(foundUser) //이렇게 되면 로그인을 시도한 회원의 정보가 다 들어있다
//  if 문에서 제외되면 null 이게 되는 것이다.
    if (foundUser !== null) {


        var inputPassword = prompt(`비밀번호를 입력하세요`);

        if (inputPassword === foundUser.password) {
            alert(`${foundUser.username}님 환영합니다~`);
            break;

        } else {
            alert(`비밀번호가 틀렸습니다.`);
        }
    } else {
        alert(`존재하지 않는 회원입니다.`);
    }
}









