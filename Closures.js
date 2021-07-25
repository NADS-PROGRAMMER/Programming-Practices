"use strict"

const greetings = (greet) => {

    return (yourName) => {

        console.log(greet + " " + yourName);
    }
}

const myName = greetings('Hello');
myName('Nads');