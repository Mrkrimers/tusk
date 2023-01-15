// 4. ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"


const str = 'HTML JavaScript PHP'.toUpperCase().split(' ').join('-');

console.log(str);
console.log(str.replaceAll(' ','-'));

