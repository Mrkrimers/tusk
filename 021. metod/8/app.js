// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = 5;
let arr = [];


for (let i = 0; i < n; i++) {

    const pro = prompt();
    arr.push(pro);

}

// let res = arr.every(function (el) {

//     if (!isNaN(el)) {
//         return true
//     } else return false

// })


arr.forEach(function (el) {
    if (!isNaN(el)) {
        return true;
    } else return false;
})



