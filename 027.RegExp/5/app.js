// 5. На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать


const str = 'https://regex101.com';


function isValid(str_) {
    try {
        if (!/^[a-z]+:\/\/[a-zA-Z0-9]+\.[a-z]{1,9}/gm.test(str_)) throw new Error(`not valid eMail ${str_}`)

        return true;
    } catch (error) {
        return error.message;
    }

}

const result = isValid(str);
console.log(result);














