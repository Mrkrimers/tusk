// 12. Работа с замыканием. Напишите функцию, каждый вызов который будет
// генерировать случайные числа от 1 до 100.

function wrapper() {

    return function () {
        console.log(Math.floor(Math.random() * 100));
    }

}


const result = wrapper()
result();
result();
result();
result();








































