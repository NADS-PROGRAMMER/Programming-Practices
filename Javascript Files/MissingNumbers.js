"use strict"

let array = [1, 2, 3, 4, 5, 7, 10, 12];
let missingNumbers = [];
let numbers = {};

// Put all the values to numbers object.
array.forEach((value) => {

    numbers[value] = value;
})

// Check if the highest number in array up to the lowest number is present.
for (let index = array[array.length - 1]; index >= array[0]; index--) {

    if (!(index in numbers))
        missingNumbers.unshift(index);
}

console.log("MISSING NUMBERS ARE: " + missingNumbers);
// OUTPUT -> MISSING NUMBERS ARE: 6,8,9,11