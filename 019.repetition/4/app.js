// 4. На вход подается число с помощью метода prompt – количество символов в
// будущей строке. Необходимо сформировать строку, в которую каждый раз будет
// происходить ввод с клавиатуры нового ЧИСЛОВОГО значения (добавить
// проверку на число)




let num = +prompt();
let str = '';

for (let i = 0; i < num; i++) {
    let newValue = prompt();

    if (!isNaN(newValue)) {
        str += newValue;

    }

}
console.log(str);



for (let i = 0; i < str.length; i++) {

    if (str[i] > 5) {
        console.log(str[i]);
    }

}


