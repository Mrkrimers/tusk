// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const NumArr = [2, 3, 4, 5, 6];
let count = 0;

function check(NumArr_) {

    NumArr_.forEach(function (el) {
        if (isNaN(el)) {
            count += 1;
        }
    })

    if (count == 0) {
        return true
    }

}

const checkResult = check(NumArr);
console.log(checkResult);

function nice(NumArr_) {
    if (checkResult == true) {

        let newArr = NumArr_.map(function (el) {
            return el * el;
        })

        return newArr;
    }
}

const niceResult = nice(NumArr);
console.log(niceResult);
