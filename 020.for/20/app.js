// 20.Пользователь вводит многозначное число. 
// Необходимо вставить двоеточие
// между двумя нечетными числами.
// Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.



let num = 55639217;
let str = String(num).split('');
let arr = [];

console.log(typeof str);

for (let i = 0; i < str.length; i++) {

    if (i == 0) {
        arr.push(str[i])
    }

    let lastEl = arr[arr.length - 1]


    if (str[i] % 2 == 0 && lastEl % 2 == 0) {

        arr.push(str[i])

    } else {
        arr.push(`: ${str[i]}`)
    }

}
console.log(arr);