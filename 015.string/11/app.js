// 11. Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки


const str = 'sasha yar dev';
console.log(str.indexOf(' '));
console.log(str.lastIndexOf(' '));
console.log(str.length);


if (isNaN(str)) {
    console.log(str.split(' ').slice(0, 1));

} else console.log('error');

