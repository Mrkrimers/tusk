// 1. На входе число n. Напишите функцию, которая переворачивает число

const n = '1456';

function rever(n_) {

    const a = n_.split('').reverse().join('');
    return a
}

let result = rever(n);
console.log(result);