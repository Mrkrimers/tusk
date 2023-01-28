// 3.	На вход подаются 2 строки. 
// Необходимо сравнить их и если они одинаковы, то вывести true,
// в противном случае false. 
// 'string', 'StRiNg' -> true 


// let str_1 = prompt('');
// let str_2 = prompt('');
let str_1 = ('   JavaScRipt');
let str_2 = ('jaVasCRIPT   ');


if (str_1.toLowerCase().trim() == str_2.toLowerCase().trim()) {
    console.log(true);
} else console.log(false);
