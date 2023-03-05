// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 


const btn = document.querySelector(`button`);
let flag = true;


btn.addEventListener(`click`, () => {

    const inpFirst = document.querySelector(`input.first`)
    const inpSecond = document.querySelector(`input.second`)
    console.log(inpFirst);


    if (flag == true) {
        inpFirst.value = inpSecond.value;
        // inpSecond.value = inpFirst.value;
        flag = false
    } else {
        inpFirst.value = inpSecond.value;
        // inpSecond.value = inpFirst.value;
        flag = true;
    }



})





















