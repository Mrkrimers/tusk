// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['alex', 'good', 'donkey'];


let countWords = 0;


function sashaDonkey(arr_) {
    for (let i = 0; i < arr_.length; i++) {
        if (!isNaN(arr_[i])) {
            countWords += 1;
        }
    }
    if (countWords == 0) {
        return true;
    }
}

const result = sashaDonkey(arr);
console.log(result);

let newString = '';

function newResult(arr_) {

    if (result == true) {
        arr_.forEach(function (el) {
            newString += el;
        })
    }
    return newString;
}

const konka = newResult(arr)
console.log(konka);


