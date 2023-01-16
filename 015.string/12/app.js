// 12. Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'


const data = prompt('x-x-x');
// const data = 'x-x-x';


console.log(data.replaceAll('-', '!'));
console.log(data.split('-').join('!'));