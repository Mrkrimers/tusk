// 2. По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений


const btn = document.querySelector(`button`);
const array = [];
const inp = document.querySelector(`input`);

const isValid = () => {
    if (inp.value.trim() === ``) throw new Error(`empty`);
    if (!isNaN(inp.value)) throw new Error(`no NUMBER`);
}

btn.addEventListener(`click`, () => {
    try {
        const divOne = document.querySelector(`.array`);
        isValid();
        array.push(inp.value);
        divOne.innerHTML = array;

        const divTwo = document.querySelector(`.unique`);
        const uniq = [];

        for (let i = 0; i < array.length; i++) {
            if (uniq.includes(array[i])) {
                uniq.push(array[i])
            }
        }
        divTwo.innerHTML = uniq;

    }
    catch (error) {
        alert(error.message)
    }
})













