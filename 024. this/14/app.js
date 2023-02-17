// 14. Напишите функцию, генерирующую пароль из 8 символов. (Math.random)



const Num = 8;


function doPass(Num_) {
    let password = '';

    for (let i = 0; i < Num_; i++) {

        password += Math.floor(Math.random() * 10)

    }

    return password;
}

const result = doPass(Num);
console.log(result);





























