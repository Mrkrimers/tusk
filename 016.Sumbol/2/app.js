// 2. На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false


const str_1 = prompt('');
const str_2 = prompt('');


if (str_1.includes(str_2)) {
    console.log(true);
}


str_1.includes(str_2) ? true : false;