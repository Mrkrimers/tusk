// 12. На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'.



const a = prompt('');

// let a = '2'; //просто для Debug


console.log(typeof (a));

if (a > 2 && a < 11 || a >= 26 && a < 30) {

    console.log(true);

} else console.log(false);