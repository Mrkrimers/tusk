// 16. Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки



const str = prompt('ВАШЕ СЛОВО');


if (isNaN(str)) {
    console.log(`ваше слово имеет ${str.length} значений`);

} else console.log('введите слово');
