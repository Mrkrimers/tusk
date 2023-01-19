// 10. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами


let str_1 = 'pila'.split('');
let str_2 = 'lipa'.split('');


if (str_1.sort().join('') === str_2.sort().join('')) {
    console.log(true);
} else console.log(false);


