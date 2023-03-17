// 존재하는지 확인은 includes()로 확인을 할 수가 있다. 그리고 수정은
// 내가 생각 해본것처럼 splice, index 번호로 접근해서 삭제하면 된다.

var tvxq = ["유노윤호", "최강창민", "영웅재중", "미키유천", "시아준수"];

while(true) {
    var delTarget = prompt(`현재멤버 : [ ${tvxq} ]\n삭제할 이름을 입력하세요`);

    if (tvxq.includes(delTarget)) {
        tvxq.splice(tvxq.indexOf(delTarget), 1);
    } else {
        alert(`${delTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!.`)
    }

    if(tvxq.length === 0){
        alert(`모든 멤버가 삭제되었습니다.`);
        break;
    }
}

// ============================

var tvxq = ["유노윤호", "최강창민", "영웅재중", "미키유천", "시아준수"];

while(true) {
    var modTarget = prompt(`현재멤버 : [ ${tvxq} ]\n수정할 이름을 입력하세요`);

    if (tvxq.includes(modTarget)) {
        var newMemberName = prompt(`새로운 멤버 이름을 입력하세요.`);

        tvxq[tvxq.indexOf(modTarget)] = newMemberName;
        alert(`수정완료!\n현재멤버 [${tvxq}]`);
        break

    } else {
        alert(`${delTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!.`);
    }

}
