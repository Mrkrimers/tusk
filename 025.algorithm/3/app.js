// 3. Вычислите сумму массива целых чисел статичного массива используя рекурсию


const arr = [1, 2, 3.5, 56, 54.2]


function sum(arr_) {

    let newArr = [];

    for (let i = 0; i < arr_.length; i++) {
        if (Number.isInteger(arr_[i])) {
            newArr.push(arr_[i])
        }
    }

    if (newArr.length == 1) { return newArr[newArr.length] }

    return newArr[newArr.length] + sum(newArr,)

}

const result = sum(arr);
console.log(result);


























