// 8. Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)



const a = +prompt('введите номер месяца');


switch (a) {
    case 12:
    case 2:
    case 1:
        console.log('winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('autumn');
        break;
    default:
        console.log('Повторите ввод');
        break;
}



// 2-ой способ

// const a = +prompt('введите номер месяца');


// if (a === 12 || a === 1 || a === 2) {
//     console.log('winter');
// } else if (a === 3 || a === 4 || a === 5) {
//     console.log('spring');
// } else if (a === 6 || a === 7 || a === 8) {
//     console.log('summer');
// } else if (a === 9 || a === 10 || a === 11) {
//     console.log('autumn');
// } else {
//     console.log('невернный ввод');
// }
