// 6. Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов


function lock() {
    let count = 0;

    function sum() {
        
        count += 1
        console.log(count);
    }

    return sum
}

const result = lock()
console.log(typeof result);

result();
result();
result();
result();
result();

