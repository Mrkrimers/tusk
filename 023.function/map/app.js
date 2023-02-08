const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push('sas');
}

// let newArr = [];
// arr.forEach(function (el) {
//     newArr.push(`#${el}`)

// })
// console.log(newArr);

let newArr = arr.map(function (el) {

    return `# ${el}`
})

console.log(newArr);