"use strict";



// function reverse(arr, index) {

//     if (index > arr.length - 1) 
//         return; 
        
//     reverse(arr, index + 1);
//     console.log(arr[index]);
// }

// reverse(arr, 0); // call the function.

let arr = [1, 2, 3, 4, 5, 6];

function reverse(arr, index, lastIndex) {

    if (index > (arr.length - 1) / 2) 
        return;

    reverse(arr, index + 1, lastIndex - 1);
    let temp = arr[lastIndex];
    arr[lastIndex] = arr[index];
    arr[index] = temp;
    
}

reverse(arr, 0, arr.length - 1);
console.log(arr); // OUTPUT -> [6, 5, 4, 3, 2, 1]