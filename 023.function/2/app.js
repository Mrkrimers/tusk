// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year


const str = 'sasha is not a hero';


// function beta(str_) {
//     let arr = str_.split(' ');
//     let NewArr = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (i % 2 == 0) {
//             NewArr.push(arr[i].toLowerCase())
//         } else NewArr.push(arr[i].toUpperCase())

//     }
//     return NewArr.join(' ')

// }

// let result = beta(str);
// console.log(result);

function beta(str_) {
    const arr = str_.split(' ');
    let NewArr = arr.map(function (el, index) {

        // if (index % 2 == 0) {
        //     return el.toLowerCase();
        // } else return el.toUpperCase();
        return index % 2 == 0 ? el.toLowerCase() : el.toUpperCase()

    })
    return NewArr.join(' ');
}

let result = beta(str);
console.log(result);