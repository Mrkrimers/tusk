function mul(arr) {

    const sum = arr.reduce((res, a) => res * a, 1)
    console.log(sum);
    return sum;
    
}

console.log(mul([1, 2, 3]));