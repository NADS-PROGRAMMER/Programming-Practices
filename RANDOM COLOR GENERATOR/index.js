"use strict";

// My Colors.
const colors = {

    0 : '#FFFFFF',
    1 : '#1ECBE1',
    2 : '#FBE3E0',
    3 : '#576EA8',
    4 : '#EFBEE9',
    5 : '#BEEFC4',
    6 : '#CAD1DD',
    7 : '#DDD6CA',
    8 : '#F0EFB8',
    9 : '#B8B8F0',
    10 : '#F9ACBF',
}
document.addEventListener('DOMContentLoaded', () => {

    
    const result = document.querySelector('#result');
    const body = document.body;

    result.textContent = colors[0];
    body.style.background = colors[0];

    document.querySelector('#button').addEventListener('click', () => {
        // Reset the animation to none
        setTimeout(() => {

            result.style.animation = 'none';
        }, 300); 

        // and put it again to result animation.
        result.style.animation = 'resultAnimation 300ms linear';
        changeColor(); // change the color.
    });
});

function changeColor() {

    let prop = Math.floor((Math.random() * 6));
    document.querySelector('#result').textContent = colors[prop];
    document.body.style.background = colors[prop];
   
}