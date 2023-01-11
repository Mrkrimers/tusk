// 19. Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// a x2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.



const a = +prompt('введите число a');
const b = +prompt('введите число b');
const c = +prompt('введите число c');
const D = b ** 2 - 4 * a * c
console.log('ДИСКРИМИНАНТ! ' + D);

if (D < 0) {
    console.log('нет корней');
    alert('нет корней');
} else if (D == 0) {
    const x = -b / 2 * a;
    console.log('один корень ' + x);
    alert('один корень ' + x);
} else {
    const x1 = ((-b + Math.sqrt(D)) / (2 * a));
    const x2 = ((-b - Math.sqrt(D)) / (2 * a));
      if (x1 > x2) {
        console.log('первый корень ' + x1);
        alert('первый корень ' + x1);
        console.log('второй корень ' + x2);
        alert('второй корень ' + x2);
    } else {
        console.log('второй корень ' + x2);
        alert('второй корень ' + x2);
        console.log('первый корень ' + x1);
        alert('первый корень ' + x1);
    }
}


