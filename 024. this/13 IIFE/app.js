// 13. Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {

    1: 'sasha',
    2: ';',
    3: 'JS',
    4: 'patton',
    5: 17,
};


(function count(obj_) {

    let count = 0;

    for (let key in obj_) {

        if (key) {
            count++
        }

    }
    console.log(count);

}(obj))






























