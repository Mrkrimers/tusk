// 9. Дан массив 2, 5, 9, 15, 0, 4. 
// Выведите в новый массив все числа кратные 3 циклом for of


const arr = [2, 5, 9, 15, 0, 4];
let newarr = [];


// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 3 == 0) {
//         newarr.push(arr[i]);
//     }

// }
// console.log(newarr);


for (let i of arr) {

    if (i % 3 == 0) {
        newarr.push(i);
    }
}
console.log(newarr);