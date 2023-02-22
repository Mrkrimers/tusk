// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (9 * 2 === 81, 1*2 === 1)

const amount = 6;
// const string = String(amount).split('');

// console.log(typeof string);

//ЖАЛКО СТИРАТЬ 
function doArray(amou) {
    let array = []
    while (amou >= 0) {
        array.push(Math.round(Math.random() * 10));
        amou--
    }
    return array;
}


function newArray(arr) {
    try {
        arr.forEach(function (el) {
            if (isNaN(el)) throw new Error('Bad array');
        })

        let arrayResult = arr.map(el => el * el);
        return arrayResult;
    }
    catch (error) {
        return error.message
    }

}


const arrayOne = doArray(amount);
console.log(arrayOne);

const result = newArray(arrayOne);
console.log(result);














