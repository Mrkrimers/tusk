// 10. Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых




const a = Math.sqrt(prompt());
// const a = Math.sqrt(123);


console.log(~~(a)); // округление до целого
console.log(a.toFixed(1)); //до десятых 
console.log(a.toFixed(2)); // до сотых 

console.log(typeof (a));


// Вопрос почему prompt это number ??????????????