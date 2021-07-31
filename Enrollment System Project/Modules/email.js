"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('button');
    let checkbox = document.querySelector('#checkbox');

    // By default
    button.disabled = true;

    checkbox.addEventListener('input', () => {

        if (checkbox.checked)
            button.disabled = false;
        else 
            button.disabled = true;
    })

    button.addEventListener('click', () => {

        let newStudent = JSON.parse(sessionStorage.getItem('newStudent'));
        let enrolledStudent = [];

        // Get the password and confirmed passwords.
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const confirmedPassword = document.querySelector('#confirm-pass');

        // Check if email does not exist.
        if (isEmailExist(email.value)) {

            setErrorStyles(email, 'Email does exist.');
            return;
        }

        // Checks if the password and the confirmed password is matched/correct.
        if (isPasswordMatch(password.value, confirmedPassword.value)) {

            newStudent['studentEmail'] = email.value;
            newStudent['studentPassword'] = password.value;
        } 
        else {

            setErrorStyles(confirmedPassword, 'Confirmed password does not match. Kindly check it.');
            return;
        }
            
        
        // Event in confirmed password.
        confirmedPassword.addEventListener('input', () => {

            onInputStyles(confirmedPassword);
        })

        // Event of email input.
        email.addEventListener('input', () => {

            onInputStyles(email);
        })

        // Storing the new student.
        if (localStorage.getItem('enrolledStudent') == null || localStorage.getItem('enrolledStudent') == undefined) {

            enrolledStudent = [newStudent];
            localStorage.setItem('enrolledStudent', JSON.stringify(enrolledStudent));
        }
        else {

            enrolledStudent = JSON.parse(localStorage.getItem('enrolledStudent'));
            enrolledStudent.push(newStudent);
            localStorage.setItem('enrolledStudent', JSON.stringify(enrolledStudent));
        }
    })
});

function isPasswordMatch(password, confirmPassword) {

    return String(password) === String(confirmPassword);
}

function isEmailExist(thisEmail) {

    let enrolledStudent = JSON.parse(localStorage.getItem('enrolledStudent'));

    for (let student of enrolledStudent) {

        if (student['studentEmail'] === String(thisEmail)) 
            return true;
    }
    return false;
}

function setErrorStyles(element, errorMessage) {

    element.style.animation = 'errorMessageAnimation 300ms';
    element.style.border = 'none';
    element.style.border = '1px solid #d21c38';
    element.nextElementSibling.textContent = errorMessage;
    element.nextElementSibling.style.animation = 'errorMessage 300ms';
    element.nextElementSibling.style.display = 'block';
}

function onInputStyles(element) {

    element.style.animation = 'errorMessageAnimation 300ms';
    element.style.border = 'none';
    element.style.borderBottom = '2px solid #657786';
    element.nextElementSibling.style.animation = 'errorMessageDisappearing 300ms';
    element.nextElementSibling.style.display = 'none';
}
console.log(JSON.parse(localStorage.getItem('enrolledStudent')));