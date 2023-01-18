// 15. Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua



// let str = prompt('').trim().toLowerCase().replace(' ', '');
let str = 'A L E X'.trim().toLowerCase().replace(' ', '');

let count = '';

for (let i = 0; i < str.length; i++) {
    const res = str[i];

    if (res === 'a' || res === 'e' || res === 'y' || res === 'u' || res === 'i' || res === 'o') {
        count += res
        console.log(count);
    }
    console.log(count);
}


// Вопрос почему во 2-ом консоле получается 3 а и 3 ае ?????? кажется понял, но лучше спрошу


