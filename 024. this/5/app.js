// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = 'aalF24@!kfwq';
let count = 0;





for (let i = 0; str.length; i++) {
    if (str.includes(str[i].toUpperCase())) {
        count += 1;
    } else console.log(false);

}




































