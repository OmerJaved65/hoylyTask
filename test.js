const checkForBingo = require('./sol1');
const result1 = checkForBingo(
    [
        8, 29, 35, 54, 65,
        13, 24, 44, 48, 67,
        9, 21, 'FREE', 59, 63,
        7, 19, 34, 53, 61,
        1, 20, 33, 46, 72
    ],
    [8, 24, 53, 72]
);
const result2 = checkForBingo(
    [
        8, 29, 35, 54, 65,
        13, 24, 44, 48, 67,
        9, 21, 'FREE', 59, 63,
        7, 19, 34, 53, 61,
        1, 20, 33, 46, 72
    ],
    [1, 33, 53, 65, 29, 75]
);

console.log('Result 1:', result1); //result
console.log('Result 2:', result2);
