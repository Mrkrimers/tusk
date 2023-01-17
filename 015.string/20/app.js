// 20.Пользователь вводит строку. Необходимо посчитать количество гласных


// let str = prompt('');
let str = 'I am learning javascript !'.toLocaleLowerCase();
alert(str); // просто проверка
let count = 0;

for (let i = 0; i < str.length; i++) {
    const byk = str[i];
    // console.log(byk);

    if (byk == 'a' || byk == 'e' || byk == 'i' || byk == 'o' || byk == 'u' || byk == 'y') {
        count += 1;
    }

}

console.log(`гласных в нашей строке ${count}`);









