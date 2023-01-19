// 4. Дан статичный массив с элементами и число вводимое с клавиатуры. С помощью
// цикла for и оператора if проверьте есть ли в массиве введенное число. Если есть,
// то остановите выполнение цикла. Если нет, то найдите среднее арифметическое
// всех чисел


let str = '738958546123'.split('');
let a = 2;
let sum = 0;
let count = 0;


for (let i = 0; i < str.length; i++) {

    if (str[i] == a) {
        break
    } else {
        sum += +str[i];
        count += 1;
    }

}
console.log(typeof (sum));
console.log(typeof (count));
console.log(sum);
console.log(count);
console.log(sum / count);