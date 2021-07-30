"use strict";

import Student  from "./student.js";

let enrolledStudent = [];

function addInputEvents() {

    let inputFields = document.querySelectorAll('.input-field');

    for (let index = 0; index < inputFields.length; index++) {

        inputFields[index].addEventListener('input', () => {

            // Check if the input field is empty.
            if (!(inputFields[index].value)) {

                inputFields[index].style.transition = 'border 300ms'
                inputFields[index].nextElementSibling.style.animation = 'errorMessage 300ms';
                inputFields[index].style.border = '1px solid #d21c38';
                inputFields[index].nextElementSibling.style.display = 'block';
               
            }
            else {
                
                inputFields[index].style.border = 'none';
                inputFields[index].style.border = '1px solid #3faf83';
                inputFields[index].nextElementSibling.style.display = 'none';
            } 
        })
    }
}

function getData() {

    let info = [];
    let inputFields = document.querySelectorAll('.input-field');

    inputFields.forEach(input => {

        console.log(input.value);
    })
}
document.addEventListener('DOMContentLoaded', () => {

    addInputEvents();

    document.querySelector('button').addEventListener('click', () => {

        getData();
    })
});