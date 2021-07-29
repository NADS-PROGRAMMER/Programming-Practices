"use strict"

/***** 
 * Arrow Functions feature of ES6. */

// Before ES6,

function concatenateTwoArrays(array1, array2) {

    return array1.concat(array2);
}

console.log("USING FUNCTION DECLARATION: ", concatenateTwoArrays([1, 2, 3], [4, 5, 6])); 

// In ES6, Arrow functions are introduced. It is a synctactic sugar syntax of function declaration

// Arrow functions

const concatenateArrays = (array1, array2) => array1.concat(array2);

console.log("USING ARROW FUNCTIONS: ", concatenateArrays([1, 2, 3], [4, 5, 6]));

/** 
 * The Output will be: 
 * 
 * USING FUNCTION DECLARATION:  [ 1, 2, 3, 4, 5, 6 ]
 * USING ARROW FUNCTIONS:  [ 1, 2, 3, 4, 5, 6 ]
 */