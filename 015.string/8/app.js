// 8. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'




const str = 'aaa bbb ccc';

if (!isNaN(str)) {
    console.log('error');
} else {

    console.log(str.slice(4, 7));
}
