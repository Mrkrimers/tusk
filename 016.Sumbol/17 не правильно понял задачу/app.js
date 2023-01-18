// 17. На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр



// let str = prompt('').toUpperCase().split('_');
let str = 'qwe_asd_zxc_'.toUpperCase().split('_');
let count = '';


console.log(str);


for (i = 0; i < str.length; i++) {

    count += str[i].slice(1);

}

console.log(count);


