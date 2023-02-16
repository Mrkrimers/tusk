// 10. Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки


const str = 'hi worl234wwwd';
let letter = 'w';

function findLet(str_, letter_) {
    let count = 0;

    for (let i = 0; i < str_.length; i++) {

        if (str_[i] == letter_) count++

    }

    return count;
}


let res = findLet(str, letter)
console.log(res);





















