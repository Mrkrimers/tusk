// let animal = {
//     eats: `траву`,
//     walk() {
//         console.log(`walk walk`);
//     }
// };

// let rabbit = {
//     jumps: `высоко`,
//     __proto__: animal
// };

// let longYear = {
//     earLength: 10,
//     __proto__: rabbit
// };



// longYear.walk();

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log((rabbit.jumps)); // ? (1)

delete rabbit.jumps;

console.log((rabbit.jumps)); // ? (1)

delete animal.jumps;

console.log((rabbit.jumps)); // ? (1)
