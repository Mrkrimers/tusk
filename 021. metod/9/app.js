// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
    let pro = +prompt('');
    if (!isNaN(pro)) {
        arr.push(pro);
    }
}

// let count = 0;

// arr.forEach(function (el) {
//     if (!isNaN(el)) {
//         return count += el;
//     }
// })
// console.log(count);

let count = arr.reduce(function (sum, el) {
    return sum + el;
}, 0)
console.log(count);