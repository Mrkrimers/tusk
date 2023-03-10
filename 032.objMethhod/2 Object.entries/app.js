// 2. Написать функцию на подсчет количества пар ключ значение в объекте. 
// Добавить проверки 

const obj = {

}

const foundCount = (obj_) => {
    try {
        const pairs = Object.entries(obj_).length;

        if (!pairs) throw new Error(`нет пар`)

        return pairs;
    }
    catch (error) {
        return (error.message);
    }
}

const result = foundCount(obj);
console.log(result);

