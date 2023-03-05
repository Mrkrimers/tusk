// 12. Вывести в строчку все вводимые значения через инпут в виде массива.
// Добавить проверку, что поле не пустое



const btn = document.querySelector(`button`);

let array = [];

btn.addEventListener(`click`, () => {
    try {
        const input = document.querySelector(`input`)
        const div = document.querySelector(`div`)
        if (input.value.trim() == ``) throw new Error(`Empty`)

        array.push(input.value);
        div.innerHTML = array;
    }
    catch (error) {
        alert(error.message)
    }

})



























