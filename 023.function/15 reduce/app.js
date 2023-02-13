// 15. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива


const n = 5;

function array(n_) {
    let arr = [];
    let promp = 2;
    for (let i = 0; i < n_; i++) {
        // let promp = prompt();
        arr.push(promp);

    }
    return arr;
}

function isValid(arr_) {

    for (let i = 0; i < arr_.length; i++) {

        return typeof (arr[i]) ? true : false;

        // if (typeof (arr[i]) == 'number') {
        //     return true;
        // } else false

    }
    return true;
}


function mult(arr_) {

    const bool = isValid(arr);
    console.log(bool);
    // let result = arr_.reduce(function (sum, el) {
    //     return sum * el
    // }, 1);
    if (bool == true) {

        let result = arr_.reduce((sum, el) => sum * el, 1);
        return result;

    } else 'error'
}


const arr = array(n);
const res = mult(arr);

console.log(res);
