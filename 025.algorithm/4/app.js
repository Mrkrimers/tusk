// 4. Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13



const n = 6;
const count = 0;
const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]





// function search(arr_, n_) {

//     if (n_ == 1) return arr_[n_]

//     return search(arr_, n_ - 1)

// }

// let result = search(array, n)
// console.log(result);



function search(arr, cou, num) {

    if (cou == num) { return arr[num - 1] }

    return search(arr, cou + 1, num)
}

let result = search(array, count, n);
console.log(result);