// 11. Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1




const a = +prompt('введите количество сантиметров');


if (!isNaN(a)) {

    console.log((Math.floor(a / 100)));
    alert(Math.floor(a / 100));

} else console.log('NaN');

