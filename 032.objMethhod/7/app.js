// 7. На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 

const str = `123`;
// console.log(str[0]);

function main(str_) {
    let count = 0;
    for (let i = 0; i < str_.length; i++) {
        count += str[i] ** i;
    }
    return count;
}

const result = main(str);
console.log(result);

