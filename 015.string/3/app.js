// 3. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы


const str = prompt('').trim().toLowerCase();

// if (!isNaN(str)) {
//     console.log('error');
// } else {
//     console.log(str.length);
// }


console.log(!isNaN(str) ? 'error' : str.length);