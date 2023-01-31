// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false


const n = 10;
let arr_1 = [];
let arr_2 = [];


for (let i = 0; i < n; i++) {

    let value = prompt();

    i < 5 ? arr_1.push(value) : arr_2.push(value)
}

let sort_1 = arr_1.sort();
let sort_2 = arr_2.sort();


sort_1.join('') === sort_2.join('') ? console.log(true) : console.log(false);; 