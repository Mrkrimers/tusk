// 4. Дана строка массива. Необходимо спарсить строку. Если же после того как вы
// спарсили данные у вас не массив – бросить исключение. Вывести
// те элементы массива, id котрых – четное значение

// [
//     { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]


const array = JSON.parse(`
[
    { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
]
`)


function isValid(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error('NOT ARRAY')
        let newArr = [];
        arr.forEach(function (el) {
            if (el.id % 2 == 0) newArr.push(el)
        })
        return newArr;
    } catch (error) {
        return error.message
    }
}


const result = isValid(array)
console.log(result);















