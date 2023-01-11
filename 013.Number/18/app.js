// 18. Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить то целых)



const a = +prompt('введите число');
const sqr = Math.sqrt(a);

// console.log(Math.sqrt(a));


if (Number.isInteger(sqr)) {
    console.log(Math.sqrt(a));
    alert("корень равен " + Math.sqrt(a));
} else {
    console.log(Math.sqrt(a).toFixed(2));
    alert("округлил до " + Math.round(Math.sqrt(a)));
}




// console.log(Math.floor(num1/num2)); //  (округление в меньшую сторону)
// console.log(Math.ceil(num1/num2)); // (округление в большую сторону)
// console.log(Math.round(num1/num2)); //  (математическое округление)
// console.log(+(num1/num2).toFixed(0)); //  (математическое округление)
// console.log(parseInt((num1/num2))); // (приведение к числу, будет отброшена дробная часть)