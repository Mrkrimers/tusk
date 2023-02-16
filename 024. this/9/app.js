// 9. На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

// let arr = [1, 9, 45, 11, 10];
const num = 5;


function doArr(num_) {
    let array = [];

    for (let i = 0; i < num_; i++) {
        array.push(prompt())
    }

    return array;
}




function back(array_) {

    let n = 10;
    let newArr = [];

    for (let i = 0; i < array_.length; i++) {

        if (array_[i] > n) {
            newArr.push(array_[i])
        }
    }

    return newArr;
}

let array = doArr(num)
const result = back(array);
console.log(result);


















