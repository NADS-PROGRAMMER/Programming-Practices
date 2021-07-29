"use strict";

import Student  from "./Modules/student.js";

function addInputEvents() {

    let inputFields = document.querySelectorAll('.input-field');

    for (let index = 0; index < inputFields.length; index++) {

        inputFields[index].addEventListener('input', () => {

            if (!(inputFields[index].value)) {

                inputFields[index].style.border = '1px solid #d21c38';
                inputFields[index].nextElementSibling.style.display = 'block';
            }
            else {

                inputFields[index].style.border = 'none';
                inputFields[index].style.borderBottom = '2px solid #657786';
                inputFields[index].nextElementSibling.style.display = 'none';
            } 
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {

    addInputEvents();

    document.querySelector('button').addEventListener('submit', () => {

        return true;
    })
});