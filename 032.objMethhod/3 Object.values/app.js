// 3. На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values

const obj = {
    id: 1,
    str: `bla bla`,
    sas: 2,
    23: `str`
}

const str = `2`;

const findStr = (obj_, str_) => {
    try {
        const array = Object.values(obj_);
        if (!array.includes(str_)) throw new Error(`Erorr! no matches`)

        return true;
    }
    catch (error) {
        return error.message;
    }
}

const result = findStr(obj, str)
console.log(result);









