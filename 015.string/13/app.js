// 13. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.



// const data = prompt('xxxx-xx-xx');
const data = 'xxxx-xx-xx';
alert(data);


console.log(data.split('-').reverse().join('.'));