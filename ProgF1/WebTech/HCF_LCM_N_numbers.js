// HCF Function using the Euclidean algorithm
function calculateHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// LCM Function
function calculateLCM(a, b) {
    return (a * b) / calculateHCF(a, b);
}

// HCF Function for an array of numbers
function findHCFOfArray(arr) {
    return arr.reduce((hcf, num) => calculateHCF(hcf, num));
}

// LCM Function for an array of numbers
function findLCMOfArray(arr) {
    return arr.reduce((lcm, num) => calculateLCM(lcm, num));
}

// Input

let numbers = [15, 20, 30, 40]; // Example array of numbers

let hcf = findHCFOfArray(numbers);
let lcm = findLCMOfArray(numbers);

console.log(`HCF of [${numbers.join(', ')}] is ${hcf}`);
console.log(`LCM of [${numbers.join(', ')}] is ${lcm}`);


/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter numbers separated by space: ', (input) => {
    let numbers = input.split(' ').map(Number); // Convert input string to an array of numbers

    let hcf = findHCFOfArray(numbers);
    let lcm = findLCMOfArray(numbers);

    console.log(`HCF of [${numbers.join(', ')}] is ${hcf}`);
    console.log(`LCM of [${numbers.join(', ')}] is ${lcm}`);

    rl.close();
});
*/