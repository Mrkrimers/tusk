// 12. Дан массив 2, 5, 9, 15, 0, 4. 
// Выведите все числа кратные 5 циклом while


const arr = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 5 == 0) {

//         console.log(arr[i]);

//     }

// }

let i = 0;
while (i < arr.length) {
    if (arr[i] % 5 == 0) {

        console.log(arr[i]);

    }
    i++
}

