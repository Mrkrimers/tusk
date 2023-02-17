// 16. *Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5];

function sumArr(arr_) {

    if (arr_[arr_.length]) return arr_[arr_.length]

    for (let i = 0; i < arr_.length; i++) {


    }


    return arr_[0] + sumArr(arr_[arr_.length - 1])

}


const result = sumArr(arr);
console.log(result);





























