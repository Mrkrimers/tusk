// 3. На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 



// let num = +prompt();
let num = 9;


for (let i = 1; i <= num; i++) {

    if (i % 3 == 0) {

        console.log(i);

    }

    i % 3 == 0 ? console.log(i) : null;

}


