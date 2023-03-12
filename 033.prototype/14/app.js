// 14. По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?


const btn = document.querySelector(`button`);
const inp = document.querySelector(`input`);

const isValid = (inp_) => {
    if (inp_.value.trim() === ``) throw new Error(`empty`);
}


btn.addEventListener(`click`, () => {
    try {
        const divOne = document.querySelector(`.strLow`)
        const divTwo = document.querySelector(`.strHigh`)
        isValid(inp);

        divOne.innerHTML = inp.value;

        const newStr = inp.value.replaceAll(` `, ``).toLocaleUpperCase().split(``).join(`  `);
        divTwo.innerHTML = newStr;

    }
    catch (error) {
        alert(error.message)
    }
})



