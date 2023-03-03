// 9. У вас есть кнопка. После каждого нажатия менять background.



const btn = document.querySelector(`button`);
let flag = true;


btn.addEventListener(`click`, function () {

    if (flag == true) {
        btn.style.background = `red`;
        flag = false;

    } else {
        btn.style.background = `white`;
        flag = true;
    }
})















