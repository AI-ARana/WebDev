/*
Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by
the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
Example 1:
Input: words = ["i", "love", "brainmentors", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Example 2: Input: words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
 */
function arrayProcessing(words, k) {
    // Count frequency of each word
    const countM = new Map();
    for (const word of words) {
        countM.set(word, (countM.get(word) || 0) + 1);
    }

    // Sorting of words by frequency and lexicographical order
    const sortedW = Array.from(countM.keys()).sort((a, b) => {
        const countCompare = countM.get(b) - countM.get(a);
        if (countCompare !== 0) {
            return countCompare;
        } else {
            return a.localeCompare(b);
        }
    });

    // Return the top k words
    return sortedW.slice(0, k);
}
/*
// Input from user (words array and k value)
const wIp = prompt("Enter words separated by commas:");
const w = wIp.split(',').map(word => word.trim());

const k = parseInt(prompt("Enter the value of k:"), 10);

// Function Call
const r = arrayProcessing(w, k);
//Output
console.log(r);
alert("Top " + k + " frequent words: " + r.join(", "));
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// User input
function userInput(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the script
(async function main() {
    const wIp = await userInput("Enter words separated by commas: ");
    const w = wIp.split(',').map(word => word.trim());

    const k = parseInt(await userInput("Enter the value of k: "), 10);

    const result = arrayProcessing(w, k);
    console.log("Top " + k + " frequent words:", result.join(", "));

    rl.close();
})();