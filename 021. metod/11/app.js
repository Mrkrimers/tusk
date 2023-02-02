// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = 5;
let arr = [];

for (i = 0; i < n; i++) {
    let a = prompt();
    if (!isNaN(a)) {
        arr.push(a)
    }
}

// const res = arr.reduce(function (b, el) {
//     return b * el;
// }, 0)

// console.log(res);


let result = 1;
let i = 0;

while (i < 5) {
    result *= arr[i]
    i++
}
console.log(result);

let res = 1;

for (let i = 0; i < arr.length; i++) {
    res *= arr[i];
}
