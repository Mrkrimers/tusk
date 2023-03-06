// 6. Вы вводите строку.
// Проверить является ли это слово палиндром. Добавить проверки


const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);
const div = document.querySelector(`div`);


btn.addEventListener(`click`, () => {
    try {

        if (!isNaN(inp.value)) throw new Error(`do not use number`)
        if (inp.value.trim() == ``) throw new Error(`empty`)

            let newWord = inp.value.split(``).reverse().join(``).toLowerCase();


        if (inp.value.toLowerCase() != newWord) {
            div.innerHTML = `<p>НЕТ совпадения</p>`
        } else {
            div.innerHTML = `<p>Это палиндром</p>`
        }





    }
    catch (error) {
        alert(error.message)
    }
})








































