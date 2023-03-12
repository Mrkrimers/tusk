// 3. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }


const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);
const array = [];

const isValid = (inp_) => {
    if (inp_.value.trim() === ``) throw new Error(`empty`);
    if (isNaN(inp.value)) throw new Error(`It is letter`);
}

btn.addEventListener(`click`, () => {
    try {
        const divOne = document.querySelector(`.array`);
        const divTwo = document.querySelector(`.object`);
        isValid(inp);

        array.push(inp.value);

        divOne.innerHTML = array;
        inp.value = ``;

        const obj = {}

        for (let i = 0; i < array.length; i++) {
            obj[i] = array[i];
        }
        divTwo.innerHTML = JSON.stringify(obj);


        // console.log(obj);
    }
    catch (error) {
        alert(error.message)
    }
})

