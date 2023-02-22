// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение


const value = +prompt('value')


function isValid(value_) {
    try {

        if (typeof value_ == 'string' || value_ % 2 != 0) throw new Error('NOT a number')

        return `${value_} you number is GOOD`
    } catch (error) {
        return error.message
    }
}

let result = isValid(value)
alert(result)








