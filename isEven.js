"use strict"

let result = "";

function isEven(n) {

    if (n == 0)
        console.log('EVEN');
    else if (n == 1) 
        console.log('ODD');
    else 
        isEven(n - 2);
}

console.log(isEven(50));