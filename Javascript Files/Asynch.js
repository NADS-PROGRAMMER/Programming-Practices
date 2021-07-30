"use strict";

// const skills = ['HTML', 'CSS', 'Javascript', 'React', 'SCSS', 'Bootstrap'];

// Object.freeze(skills);

// skills[4] = 'Tailwind'; 

// console.log(skills);

// To resolve this issue.

const twitter = {

    account: {

        username: '@username',
        password: 'mypassword',
        otherinfo: {

            firstName: 'firstName',
            middleName: 'middleName',
            lastName: 'lastName',
        }
    },
}

const {account: {
    username: myUsername, 
    password: myPassword, 
    otherinfo: {firstName}
}} = twitter;

console.log(myUsername);
console.log(myPassword);
console.log(firstName)

// Destructuring an array.
/** 
 * in spread operator the [] notation is on the right side, while the array destruct is on the left side and we cannot choose what element to assign to variable.
 * */

const [a, b, ...myArray] = [1, 2, 3, 4, 5, 6];

/** 
 * To skip the elements, use ',' 
*/

const[c, d,, ...myArray2] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, myArray);
console.log(c, d, myArray2);