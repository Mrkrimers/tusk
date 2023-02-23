// 4. На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const eMail = `sasha_yarmosh@mail.ru`;


function isValid(eMail_) {
    try {

        if (!/^[a-zA-Z0-9\-_\.]+@[a-z]{1,9}\.[a-z]{1,9}$/gm.test(eMail_)) throw new Error(`this is not mail`)
        return true

    } catch (error) {
        return error.message;
    }
}

const result = isValid(eMail)
console.log(result);



