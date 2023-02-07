// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

const name = 'sasha';
const surname = 'yarmosh';

function person(a, b) {
    return `HI, ${a} ${b}`
}

let res = person(name, surname);
console.log(res);