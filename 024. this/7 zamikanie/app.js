// 7. Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции




// function mainFunc() {

//     let string = '';

//     function sumStr() {
//         string += prompt();
//         console.log(string);
//     }

//     return sumStr


// }


// const result = mainFunc()
// result()
// result()
// result()



function mainFunc() {

    let string = '';

    function sumStr(param) {
        string += param;
        console.log(string);
    }

    return sumStr


}


const result = mainFunc()
result('sasha ')
result('not ')
result('hero ')























