// 5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)


const password = 'qwer1578@@##';

// let obj = { ...password }


// // console.log(obj);
// // console.log(typeof (obj));
// // console.log(typeof (password[4]));
// // console.log(typeof (password[5]));
// // console.log(typeof (password[6]));
// // console.log(typeof (password[7]));
// // console.log(typeof (password[8]));
// // console.log(typeof (password[9]));
// // console.log(typeof (password[10]));


// for (let key in obj) {

//     console.log(typeof (obj[key]));

// }



// // let count = 0;

// // for (let i = 0; i < password.length; i++) {

// //     console.log(typeof (password[i]));

// // }





function forCheck(pass) {

    let a = 0;
    let b = 0;
    let c = 0;

    if (pass.length >= 8) {

        const Arr = pass.split('')

        for (let i = 0; i < Arr.length; i++) {
            if (typeof (Arr[i]) == 'symbol') {
                a += 1;
            } else if (!isNaN(Arr[i])) {
                b += 1;
            } else if (Arr[i] == Arr[i].toUpperCase() && isNaN(Arr[i])) {
                c += 1;
            }
        }

    }

    return `${a} ${b} ${c}`

}


let result = forCheck(password)
console.log(result);













