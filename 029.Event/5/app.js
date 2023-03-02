// 5. Необходимо отобразить числовой инпут и кнопку. 
// После нажатия на кнопку необходимо получить значение из инпута.
// Проверить, что это число > 0. Если проверка true, 
// то вывести в Результат ряд Фибоначчи. 


const btn = document.querySelector(`button`);


btn.addEventListener(`click`, function () {
    try {
        const arr = [0, 1];
        const inp = document.querySelector(`input`);
        const div = document.querySelector(`div`);


        if (inp.value == ``) throw new Error(`Empty`);
        if (isNaN(inp.value)) throw new Error(`not number`);

        for (let i = 2; i < inp.value; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }

        // alert(arr);


        div.innerHTML = arr;


    }
    catch (error) {
        alert(error.message)
    }


})



















































