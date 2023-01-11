// 16. Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить до 2 знаков после запятой).


const a = +prompt('введите число');
const sqr = +Math.sqrt(a);

if (Number.isInteger(sqr)) {
    console.log(Math.sqrt(a));
    alert("корень равен " + Math.sqrt(a));
} else {
    console.log(Math.sqrt(a).toFixed(2));
    alert("корень равен " + Math.sqrt(a).toFixed(2));
}

