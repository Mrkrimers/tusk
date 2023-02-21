// 5. На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 5;



function toArray(n_) {
    let arr = [];
    for (let i = 0; i < n_; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr;
}




function isValid(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') throw new Error(`WARNING ${arr[i]} letter`)
    }

}


function main(arr) {
    try {
        isValid(array)
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 100 && arr[i] > 10) newArr.push(arr[i])
        }
        return newArr

    } catch (error) {
        return error.message
    }

}



const array = toArray(n);
const res = main(array)
console.log(res);































