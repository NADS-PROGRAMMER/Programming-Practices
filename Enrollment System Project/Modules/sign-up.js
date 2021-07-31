"use strict";


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

    return {

        firstName: document.querySelector('#first-name').value,
        middleName: document.querySelector('#middle-name').value,
        lastName: document.querySelector('#last-name').value,
        birthdate: document.querySelector('#date-of-birth').value,
        country: document.querySelector('#country').value,
    }
}

document.addEventListener('DOMContentLoaded', () => {

    addInputEvents();

    document.querySelector('button').addEventListener('click', () => {

        // Set to session storage for passing the data to another page.
        sessionStorage.setItem('newStudent', JSON.stringify(getData()));
        return false;
    })
});