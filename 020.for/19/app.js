// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

const num = +prompt();
let arr = [];


for (let i = 0; i < num; i++) {

    let pro = prompt();
    if (!isNaN(pro)) {
        arr.push(pro)
    }

}

console.log(arr);








