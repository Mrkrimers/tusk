// 8. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//  значение)

const obj = {

    name: '',
    age: '32',
    height: '187',
}

let count = 0;

for (let key in obj) {

    if (key && obj[key]) {
        count++
    }

}
console.log(count);