// 12. Найдите минимальное значение в массиве используя цикл



const arr = [52, 51, 5, 1, -5, -13];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
        min = arr[i];
    }

}
console.log(min);








