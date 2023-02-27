// 1

const number = 5;

function doArr(number_) {
    const arr = [];

    for (let i = 0; i < number_; i++) {
        arr.push(prompt());
    }

    return arr;
}

const array = doArr(number); // [1, 2, 3, 4, 5]


// 2 ГЛАВНОГО АЛГОРИТМА!!!!
function main(array_) {
    try {

        const newArr = [];

        for (let i = 0; i < array_.length; i++) {

            if (array_[i] % 2 == 0) { newArr.push(array_[i]) }

        }

        return newArr;
    }

    catch (error) {
        return error.message
    }
}

const newArray = main(array);
console.log(newArray); // [2, 4.s]



// 3
function isValid(array_) {
//      count = 1;
    let count = 0;
    //          2
    for (let i = 0; i < array_.length; i++) {

        if (!isNaN(array_[i])) {

            true

        } else {
            count++;
        }
    }

    if (count != 0) {
        throw new Error(`У Вас буква в МАССИВЕ`)
    }

    return true;
}

const res = isValid(array);
console.log(res);































