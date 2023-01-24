// 6. На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового ЧИСЛОВОГО значения (добавить
// проверку на число). Отобразить итоговую сумму всех элементов строки
// ‘12345’ -> 15


const num = +prompt();
let str = '';

for (let i = 0; i < num; i++) {

    let newValue = prompt();

    if (!isNaN(newValue)) {
        str += newValue;
    }

}
console.log(str);

let count = 0;

for (let i = 0; i < str.length; i++) {

    count += +str[i];

}
console.log(count);



























