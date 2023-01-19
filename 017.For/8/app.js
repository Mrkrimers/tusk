// 8. Преобразуйте первую букву каждого слова строки в верхний регистр.


const str = 'test test test'.split(' ');
let count = '';


for (let i = 0; i < str.length; i++) {

    count += str[i][0].toUpperCase() + str[i].slice(1) + ' ';

}
console.log(count);