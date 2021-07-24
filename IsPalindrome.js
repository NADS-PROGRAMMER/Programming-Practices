"use strict";

/**
 * A palindrome is a word, number, phrase, or other sequence of 
 * characters which reads the same backward as forward
 * @param {*} string 
 * - string to be checked.
 * @returns 
 * - true if the word is palindrome, otherwise, false.
 */
const isPalindrome = string => {

    let first = 0;

    for (let last = String(string).length - 1; last >= 0; last--) {

        // BASE CASE
        if (first > last) 
            break;

        if (string[first] === string[last]) {

            first++;
            continue;
        }
        return false;
    }
    return true;
}

// TEST CASES
console.log(`is racecar palindrome? -> ${isPalindrome('racecar')}`);
console.log(`is mom palindrome? -> ${isPalindrome('mom')}`);
console.log(`is tell palindrome? -> ${isPalindrome('tell')}`);
console.log(`is LOL palindrome? -> ${isPalindrome('LOL')}`);
console.log(`is empty string palindrome? -> ${isPalindrome('')}`);