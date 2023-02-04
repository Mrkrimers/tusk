// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map


const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt(''))
}

let newArr = [];

const res = arr.map(function (el) {

    // if (el % 2 == 0) {
    //     return newArr.push('YES')
    // } else return newArr.push('NOT')

    el % 2 == 0 ? newArr.push(`${el} ЧЕТ!`) : newArr.push(`${el} НЕЧЕТ!`)

})

console.log(newArr);