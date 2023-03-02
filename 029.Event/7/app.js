// 7.Записать в результат 
// удвоенное значение инпута. 
// Добавить проверки 


const btn = document.querySelector(`button`);


btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`input`);
        const div = document.querySelector(`div`);

        if (inp.value.trim() == ``) throw new Error(`emptu`)
        if (isNaN(inp.value)) throw new Error(`not a NUMBER`)

        div.innerHTML = inp.value * 2;

    }
    catch (error) {
        alert(error.message)
    }

})

























