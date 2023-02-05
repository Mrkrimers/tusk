// 7. На вход статичный объект. Необходимо объект проверить на пустоту. Если же
// объект пустой, то выводим false, если же содержит хотя бы одну пару (ключ:
// значение), то true

const obj = {
    // name: '',
}

let count = 0;
for (let key in obj) {
    if (key) {
        count++
    }
}

count == 0 ? console.log(false) : console.log(true);
