// 5. На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте


const obj = {};
const num = Math.round(Math.random() * 10);

const doObj = (obj_, num_) => {
    for (let i = 0; i <= num_; i++) {
        obj_[i] = i;
    }
}


const isValid = () => {
    try {
        doObj(obj, num);
        if (!Object.keys(obj).includes(`10`)) throw new Error(`NO`)

        return true
    }
    catch (error) {
        return error.message;
    }
}

const result = isValid();
console.log(result);
