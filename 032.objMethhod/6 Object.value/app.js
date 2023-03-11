// 6. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values


const obj = {};


const doObj = (obj_) => {
    const num = Math.floor(Math.random() * 10);
    for (let i = 0; i <= num; i++) {
        obj_[i] = Math.floor(Math.random() * 100);
    }
}

// console.log(obj);

const outputValue = () => {
    try {
        doObj(obj)

        const allValue = Object.values(obj);
        if (!allValue) throw new Error(`empty`);

        return allValue;
    }
    catch (error) {
        return error.message;
    }
}

const result = outputValue()
console.log(result);












