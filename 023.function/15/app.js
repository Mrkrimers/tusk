// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива


const num = 5;

function doArr(num_) {
    let arr = [];
    for (let i = 0; i < num_; i++) {
        arr.push(+prompt());
    }
    return arr;
}

function isValid(arr_) {
    for (let i = 0; i < arr_.length; i++)
        if (typeof arr[i] == 'number') {
            return true;
        }

    return true
}


function multiply(arr_) {
    const bool = isValid(arr);

    if (bool == true) {
        let res = arr_.reduce((sum, el) => sum * el, 1);
        return res;
    } else return 'error'
}


const arr = doArr(num);
const res = multiply(arr);
console.log(res);