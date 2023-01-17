// 4. На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

const str_1 = 'string';
const str_2 = 'StRiNg'.toLocaleLowerCase();


if (str_1 === str_2) {
    console.log(true);
} else console.log(false);


str_1.endsWith(str_2) ? true : false;