// 15. *Вычислить факториал числа используя рекурсию


// const num = prompt('faktorial');
const num = 5;


function faktorial(num_) {

    if (num_ == 1) { return num_ }

    return num_ * faktorial(num_ - 1)

}

const result = faktorial(num);
console.log(typeof result);
console.log(result);





























