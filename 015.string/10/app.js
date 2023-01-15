// 10. На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений



const str = prompt('').trim().toLowerCase();

// if (!isNaN(str)) {
//     console.log('error');
// } else {

//     console.log(str.repeat(3));
// }

!isNaN(str) ? 'error' : str.repeat(3);
