// 17. На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true



const str = prompt('').split(' ');


if (str.includes('good'.toLowerCase()) || str.includes('good'.toUpperCase())){
    console.log(true);
} else console.log(false);


