// 9. Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case.

const a = +prompt('введите число от 1 до 4')

if (!isNaN(a)) {
    switch (a) {
        case 1:
            console.log('winter');
            break;
        case 2:
            console.log('spring');
            break;
        case 3:
            console.log('summer');
            break;
        case 4:
            console.log('autumn');
            break;
        default:
            console.log('Error');
            break;
    }
} else {
    console.log('неверный ввод');
}
