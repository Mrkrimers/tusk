// 2. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)



const password = '@qweRTY1234';



function generatePass(pass_) {

    if (pass_.length < 8) return `Ваш пароль менее 8 символов`;

    let passNum = 0;
    let passLetterUpper = 0;
    let passLetterLower = 0;

    for (let i = 0; i < pass_.length; i++) {

        if (!isNaN(pass_[i])) {
            passNum++
        } else if (pass_[i] == pass_[i].toUpperCase) {
            passLetterUpper++
        } else if (pass_[i] == pass_[i].toLowerCase) {
            passLetterLower++
        }

    }


    if (pass_.length - (passLetterLower + passLetterUpper + passNum) == 0) { 

    }

    if (passNum == 0 || passLetterLower == 0 || passLetterUpper == 0 || passSymbol == 0) return `Ваш пароль КРАСАВЧИК как и Вы ;-)`

}


let result = generatePass(password);
console.log(result);























