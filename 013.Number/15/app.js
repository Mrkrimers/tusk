// 15. Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40 –
// молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод


const a = +prompt('введите ваш возраст');

if (a <= 18) {
    console.log('детство');
    alert('детство');
} else if (19 <= a && a <= 40) {
    console.log('молодость');
    alert('молодость');
} else if (41 <= a && a <= 100) {
    console.log('зрелость');
    alert('зрелость');
} else {
    console.log('некорректный ввод');
    alert('некорректный ввод');
}
