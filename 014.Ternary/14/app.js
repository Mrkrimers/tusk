// 14. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы



let str = prompt('ВАШЕ СЛОВО');


if (isNaN(str)) {
    if (str === 'hschool') {
        console.log('true');
    } else {
        console.log('false: ' + str.trim());
        alert(`false: ${str.trim()}`)
    }

} else console.log('введите слово');

