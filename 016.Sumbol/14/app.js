// 14. На вход подается строка в виде электронной почты. Если строка содержит “@” и
// оканчивается на .com, .ru, то вывести true, иначе false

// let url = prompt('');
let url = 'sasha@mail.ru';

console.log(typeof (url));

if (isNaN(url)) {

    if (url.includes('@') && url.endsWith('.ru') || url.endsWith('.com')) {

        console.log(true);

    } else console.log(false);


} else (console.log('error'));


// вопрос почему нельзя загнать в url.endsWith('.ru' || '.com')?????????????????


