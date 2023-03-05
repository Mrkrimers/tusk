// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут. 
// После нажатия на заблокировать данное действие запрещается, 
// тем самым выключая возможность редактирования значения инпута



const btnLock = document.querySelector(`button.lock`);
const btnUnlock = document.getElementById(`unlock`);


btnLock.addEventListener(`click`, () => {

    let inp = document.querySelector(`input`);
    inp.setAttribute(`readonly`, `readonly`);

})


btnUnlock.addEventListener(`click`, () => {

    let inp = document.querySelector(`input`);
    inp.removeAttribute(`readonly`);

})




























