// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = 6;
let arr = [];
let arrStr = [];
let arrNum = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}


arr.forEach(function (el) {
    if (isNaN(el)) {
        arrStr.push(el);
    } else arrNum.push(el);
})
console.log(arrStr);
console.log(arrNum);