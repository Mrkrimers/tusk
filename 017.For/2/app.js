// 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива




// let str = prompt();
let str = '1234'.split('');
let count = 1;


for (let i = 0; i < str.length; i++) {
    count *= +str[i]
}

console.log(count);