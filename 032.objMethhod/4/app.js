// 4. На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// от 1 до n). Написать функцию на поиск в объекте только четных ключей. 

const obj = {}

const doObj = (obj_) => {
    const num = Math.round(Math.random() * 10);
    for (let i = 0; i < num; i++) {
        obj_[i] = i;
    }
}

doObj(obj);
console.log(obj);


const findChetPairs = () => {
    try {



    }
    catch (error) {
        return error.message
    }
}


findChetPairs();
