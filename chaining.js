console.log("hello world")

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let bigChain = integers
    // Sort the numbers in descending order (10, 9, 8, 7, etc).
    .sort((smallest, largest) => {
        return largest - smallest;
    })
    // console.log("bigChain", bigChain);
    //Filter out integers greater than 19
    .filter((num) => {
        return num < 19;
    })
    // console.log("bigChain", bigChain);
    // Multiply each remaining number by 1.5 and then subtract 1.
    .map((num) => {
        return (num * 1.5) - 1;
    });


console.log("bigChain", bigChain);