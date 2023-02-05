// 4. На входе статичный объект.
// Необходимо вывести все четные значения объекта


const obj = {
    test_1: 1,
    test_2: 2,
    test_3: 3,
    test_4: 4,
    test_5: 5,
    test_6: 6,
}

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        console.log(obj[key]);
    }
}

