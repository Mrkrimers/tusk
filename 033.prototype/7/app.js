// 7. Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина
// столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на
// кнопку вызывается функция, принимающая три параметра: количество столбов
// (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50
// сантиметров). Рассчитайте расстояние между первым и последним столбом в
// сантиметрах


const btn = document.querySelector(`button`);
const pillarCount = document.querySelector(`.pillar-count`);
const pillarDistance = document.querySelector(`.pillar-distance`);
const pillarWidth = document.querySelector(`.pillar-width`);


btn.addEventListener(`click`, () => {



})





let result = (pillarCount * pillarWidth) + (pillarDistance * (pillarCount - 1))
















