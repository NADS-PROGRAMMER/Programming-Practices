"use strict"



function indexOf(haystack, needle) {

    // If needle is empty, then we return 0.
    if (needle == '')
        return 0;
        
    let result = '';

    for (let i = 0; i < haystack.length; i++) {

    if (haystack[i] == needle[0]) {

        let resultIndex = i;

        while (result.length != needle.length) {

            result += haystack[resultIndex];
            resultIndex++;
        }

        if (result == needle)
            return i;
        else
            result = '';
        }
    }
    return -1;
}

console.log(indexOf('Absolute', 'lu'));