// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

const n = 6;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt())
}

let count = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] != 0) {
        count += arr[i]
    } else break;
}
console.log(count);

