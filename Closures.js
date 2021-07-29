"use strict"

function myFunc(callback) {

    callback();
}

function Callback(name, callback) {

    setTimeout(() => {

        callback('nads', console.log('Callback', name));
    }, 2000)
    
}

function Callback2(name) {

    console.log('Callback2', name);
}
myFunc(() => Callback('Im Nads', Callback2));