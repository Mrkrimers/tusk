// 4. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

const obj = {}

const doObj = (obj_) => {
    const num = Math.round(Math.random() * 10);
    for (let i = 0; i < num; i++) {
        obj_[i] = i;
    }
}

// console.log(obj);


const findChetValue = () => {
    try {
        doObj(obj);
        const trueValue = Object.keys(obj);
        let array = [];
        for (let i = 0; i < trueValue.length; i++) {
            if (trueValue[i] % 2 == 0) {
                array.push(trueValue[i]);
            }
        }

        if (array.length == 0) throw new Error(`empty`)

        return array;

    }
    catch (error) {
        return error.message
    }
}


const result = findChetValue();
console.log(result);















