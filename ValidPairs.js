"use strict"

const openingBrackets = {
    "(" :")",
    "{" :"}",
    "[" :"]",
}
let stack = [];

const isValidPairs = (input) => {

    // Check if input is empty.
    if (!input)
        return false;

    for (let index = 0; index < input.length; index++) {

        // If it is opening brackets or parenthesis, push it to stack.
        if (input[index] in openingBrackets)
            stack.push(input[index]);
        else {

            /** Check if it is a pair
             * 
             *  Check the top of the stack, and compare it
             * to the current character. 
             * 
             * If it is not equal, just return false immediately.
             * */
            if (openingBrackets[stack.pop()] !== input[index])
                return false;
        }
    }

    /** If the code reach here, it means the input is a valid pairs of parenthesis. */
    return true;
}

console.log(isValidPairs("[](){}")); // True
console.log(isValidPairs('(][]()')); // False
console.log(isValidPairs('[{()}]')); // True
console.log(isValidPairs('[{})')); // False
console.log(isValidPairs('([{}])')) // True

