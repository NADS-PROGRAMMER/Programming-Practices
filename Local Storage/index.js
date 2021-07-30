"use strict";


class Person {

    #name;
    #age;

    constructor(name, age) {

        this.#name = name;
        this.#age = age;
    }

    print() {

        console.log(`Name: ${this.#name} 
        Age: ${this.#age}`);
    }
}

let person = {

    name: 'NADS',
    age: 20,
}

let person1 = new Person('Nads', 20);

console.log(person1);

let array = [person];

console.log(JSON.parse(JSON.stringify(array)))