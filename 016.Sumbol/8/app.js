// 8. Задача на слово палиндром. Если слово одинаковое с 2 сторон, то true, в
// противном случае false
// мем -> true
// тест -> false



let str = 'мем'.trim().toLowerCase();
let rev = str.split().reverse().join();
if (str == rev) {
    console.log('true');
}

str === rev ? true : false;






