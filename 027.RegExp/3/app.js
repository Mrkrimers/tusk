// 3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
// “!”. Если же длина исходной строки не изменилась, вывести true, в противном
// случае бросить исключение и обработать

const str = `sasha is not a hero`;


function isValid(str_) {
    try {

        let newStr = str_.replaceAll(/ /gm, `!`)
        // return newStr;

        if (str_.length != newStr.length) throw new Error(`ЧТО ТЫ НАДЕЛАЛ???`)
        return `${newStr} КРАСАВА`

    } catch (error) {
        return error.message
    }

}


const result = isValid(str)
console.log(result);











