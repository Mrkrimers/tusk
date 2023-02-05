// 5. На входе статичный объект. 
// Необходимо сформировать массив из всех нечетных
// ключей объекта



const obj = {
    1: 'a',
    2: 's',
    3: 'h',
    4: 'y',
    5: 'n',
    6: 'l',
};

const arr = [];
for (let key in obj) {
    if (key % 2 != 0) {
        arr.push(key)
    }
}
console.log(arr);