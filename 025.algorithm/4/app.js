// 4. Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13



const n = 1;
const num = 3;

const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]


function search(arr_, n_, num_) {

    if (n_ == num_) { return arr_[n_] }

    return search(arr_, n_ + 1, num_)
}


const result = search(array, n, num)
console.log(result);











