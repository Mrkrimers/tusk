// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения

const obj = {
    0: 7,
    1: 7,
    2: 6,
    3: 5,
    4: 2,
    5: 2,
    6: 1,
}

let arr = [];

for (let key in obj) {
    arr.push(obj[key]);
}
console.log(arr);

arr = arr.sort();
let uniq = [];

for (let i = 0; i < arr.length; i++) {

    if (!uniq.includes(arr[i])) {
        uniq.push(arr[i]);
    }

}
console.log(uniq);

let objRes = {};

for (let i = 0; i < uniq.length; i++) {

    objRes[i] = uniq[i]
}
console.log(objRes);







