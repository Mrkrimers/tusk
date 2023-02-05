// 6. На входе статичный объект. 
// Необходимо числовые значения удвоить на выходе.

const obj = {
    test_1: 1,
    test_2: 2,
    test_3: 3,
    test_4: 4,
    test_5: 'sasha',
    test_6: 'dota',
    test_7: 'gg',
};

let arr = [];
for (let key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key] * 2)
    }
}
console.log(arr);