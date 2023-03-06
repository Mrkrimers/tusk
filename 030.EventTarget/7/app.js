// *7 *Дана таблица c 1 колонкой.
// Под таблицей сделайте форму (инпут и кнопка), 
// с помощью которой можно будет добавить нового значение в таблицу. 


document.querySelector(`.btn`).addEventListener(`click`, () => {
    // alert(`hi`)

    const table = document.querySelector(`tbody`);
    const tr = document.createElement(`tr`);
    const td = document.createElement(`td`);

    td.innerHTML = document.querySelector(`.inp`).value;

    tr.appendChild(td);
    table.appendChild(tr);

})








































