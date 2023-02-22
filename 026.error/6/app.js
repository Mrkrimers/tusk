// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует


const aNum = 4,
    bNum = 3,
    cNum = 6;



function isValid(a, b, c) {

    return (a + b > c && a + c > b && b + c > a) ? true : false;

}

function main() {
    try {
        const bool = isValid(aNum, bNum, cNum);

        if (bool != true) throw new Error('NO triangle')

        return `All right`

    } catch (error) {
        return error.message
    }
}


const result = main();
console.log(result);
















