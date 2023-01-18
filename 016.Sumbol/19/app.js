// 19. На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4; Г – 2; Ц – 3; Т – 5 


// let str = prompt('').trim().toLowerCase().replaceAll(' ', '');
let str = 'ацгтхзыфхыфх'.trim().toLowerCase().replaceAll(' ', '');

let count_1 = 0;
let count_2 = 0;
let count_3 = 0;
let count_4 = 0;

for (let i = 0; i < str.length; i++) {
    const result = str[i];

    switch (result) {
        case 'а':
            count_1 += 1;
            break;
        case 'г':
            count_2 += 1;
            break;
        case 'ц':
            count_3 += 1;
            break;
        case 'т':
            count_4 += 1;
            break;

        default:
            break;
    }

}

console.log(`А - ${count_1}`);
console.log(`Г - ${count_2}`);
console.log(`Ц - ${count_3}`);
console.log(`Т - ${count_4}`);
