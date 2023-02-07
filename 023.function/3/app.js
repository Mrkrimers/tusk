// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company 

let str = 'hschool company my love'.split(' ');

function showRes(str_) {

    let newStr = '';
    for (let i = 0; i < str.length; i++) {

        newStr += str[i][0].toUpperCase() + str[i].slice(1) + ' ';

    }

    return newStr;
}

let result = showRes(str);
console.log(result);







