// 3. Напишите функцию, которая принимает почту и возвращает объект, вида
// { email,
// active: true / false
// }
// true, если почта содержит @, .com / .ru. False в противном случае



const eMail = 'sasha@.com';


function doObj(eMail_) {
    let obj = {
        email: eMail_,
    }

    if (eMail_.includes('@') || eMail_.endsWith('.ru') || eMail_.endsWith('.com')) {
        obj.active = true;
    } else obj.active = false;

    return obj;
}


const result = doObj(eMail);
console.log(result);



















