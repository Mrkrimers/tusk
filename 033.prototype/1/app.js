// 1. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива


const btn = document.querySelector(`button`);
let array = [];

const isValid = (inp_) => {
    if (isNaN(inp_.value)) throw new Error(`Але не число!`)
    if (inp_.value.trim === ``) throw new Error(`empty`)
}


btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`input`);
        let div = document.querySelector(`.array`);
        let div2 = document.querySelector(`.avg`)

        isValid(inp)

        array.push(inp.value)

        div.innerHTML = array;
        inp.value = ``;

        const result = array.reduce((sum, el) => sum + +el, 0)

        div2.innerHTML = result / array.length

    }
    catch (error) {
        alert(error.message)
    }
})

