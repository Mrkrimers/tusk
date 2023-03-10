// 1. На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 


const obj = {
    id: 1,
    str: `bla bla`,
    sas: 2,
    23: `str`
}

const str = `opa opa`;



const bool = obj.hasOwnProperty(str);
console.log(bool);








