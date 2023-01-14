// 7. Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел



let V1 = +prompt('введите скорость v1');
let V2 = +prompt('введите скорость v2');
let S = +prompt('введите расстояние');

if (isNaN(V1, V2, S)) {
    console.log('error');
    alert('error');

} else {
    const time = S / (V1 + V2);
    console.log(S / (V1 + V2));
    alert(time);
}





// const v1 = +prompt();
// const v2 = +prompt();
// const s = +prompt();

// if (!isNaN(v1) && !isNaN(v2) && !isNaN(s)) {
//     const t = s / (v1 + v2);
//     console.log(t + `час`);

// } else {
//     console.log(`это не число`);
// }



