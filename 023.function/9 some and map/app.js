// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [2, 3, 4, 5, 6];


function isValid(a) {


    let resBooly = a.some((el) => typeof (el) == 'number' ? true : false)

    // let resBooly = a.some(function (el) {

    // if (typeof (el) == 'number') {
    //     return true;
    // } else return false;

    // })
    return resBooly;
}

function inSqu(arr_) {

    const bool = isValid(arr);

    if (bool == true) {

        let result = arr_.map((el) => el * el)
        return result;

    }
    // let result = arr_.map(function (el) {
    //     return el * el;
    // })
}



const newArr = inSqu(arr);
console.log(newArr);














