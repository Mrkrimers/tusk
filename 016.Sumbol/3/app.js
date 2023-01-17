// 3. На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false

const str_1 = prompt('');
const str_2 = prompt('');


if (str_1.endsWith(str_2)) {
    console.log(true);
}


str_1.endsWith(str_2) ? true : false;