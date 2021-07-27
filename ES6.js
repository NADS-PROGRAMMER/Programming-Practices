"use strict"

let numbers = [1, 2, 3];

// Array.map
const newArray = numbers.map(number => number + 2);
console.log(newArray);

// Object Destructuring

const person = {

    name: "nads",
    age: 20,
    country: "PH",
}

// HERE IS THE OBJECT DESTRUCTURING SYNTAX.
const {name, age, country} = person;

// if u want to have an aliases, use this syntax
const {name: myName} = person;


// SPREAD OPERATOR
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// The syntax of spread operator is ...
let combinedArray = [...array1, ...array2];
// by doing spread operator, we can insert elements in different positions in the new array.
// It is also allowed in objects.  
combinedArray = [0, ...array1, 10, ...array2];
console.log(combinedArray);

// Classes
class Account {

    constructor(username, password) {

        this.username = username;
        this.password = password;
    }
    
    showInfo() {

        console.log(`USERNAME: ${this.username} \nPASSWORD: ${this.password}`);
    }
}

const account = new Account('programmer', "*********");

account.showInfo();