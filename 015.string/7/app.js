// 7. На вход программе подаётся строка. Замените все @ на '!' с помощью глобального
// поиска и замены (2 способа)



const str = prompt('');


if (isNaN(str)) {
    console.log(str.replaceAll('@', '!'));
} else console.log('error');

isNaN(str) ? str.replaceAll('@', '!') : 'error';


if (isNaN(str)) {
    console.log(str.split('@').join('!'));
} else console.log('error');

isNaN(str) ? str.split('@').join('!') : 'error';