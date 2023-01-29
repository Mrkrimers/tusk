// 7. Дан массив с элементами [1, 2, 3, 4, 5]. 
// С помощью цикла for of найдите сумму
// элементов этого массива


let arr = [1, 2, 3, 4, 5];
let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let i = 0;
// while (i < arr.length) {
//     sum += arr[i];
//     i++;
// }
// console.log(sum);


// let i = 0;
// do {
//     sum += arr[i];
//     i++;
// } while (i < arr.length);
// console.log(sum);


for (let i of arr) {
    sum += i;
}
console.log(sum);