// 19. Пользователь вводит строку. Необходимо повторить ее трижды


const str = prompt('ВАШЕ СЛОВО');


if (isNaN(str)) {
    console.log(str.repeat(3));

} else console.log('введите слово');

