// 5. Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы


let str = prompt('').trim().toLowerCase();

if (!isNaN(str)) {
    console.log('error');
} else {
    console.log(str[0].toUpperCase() + str.slice(1));
}


