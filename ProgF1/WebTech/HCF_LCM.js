// Function to calculate the HCF (GCD) using the Euclidean algorithm
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

// Input
let num1 = 15;
let num2 = 20;

let hcf = calculateHCF(num1, num2);
let lcm = calculateLCM(num1, num2);

console.log(`HCF of ${num1} and ${num2} is ${hcf}`);
console.log(`LCM of ${num1} and ${num2} is ${lcm}`);


/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Input from the user
rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        let hcf = calculateHCF(num1, num2);
        let lcm = calculateLCM(num1, num2);

        console.log(`HCF of ${num1} and ${num2} is ${hcf}`);
        console.log(`LCM of ${num1} and ${num2} is ${lcm}`);

        rl.close();
    });
});
*/