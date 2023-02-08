// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n = 5;


function doArr(n_) {
    const arr = [];
    for (let i = 0; i < n_; i++) {
        arr.push(prompt());
    }

    return arr;
}


function showLength(arr_) {
    return arr_.length;
}

let array = doArr(n);
let result = showLength(array);

console.log(result);