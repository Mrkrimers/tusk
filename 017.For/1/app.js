// 1. Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12


// // let str = prompt('');
let str = '1234';
let count = 0;

for (let i = 0; i < str.length; i++) {
    count += +str[i]
}

console.log(count);

