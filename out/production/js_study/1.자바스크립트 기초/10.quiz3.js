var input = +prompt('정사각형을 그립니다. \n 높이는 얼마입니까?');




var star = '';

for (var x = 1; x <= input; x++) {
    for (var y = 1; y <= input; y++) {
        star += `*  `;
    }
    star += '\n ';
}
    alert(star);


  