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

    button.addEventListener('submit', () => {

        let newStudent = JSON.parse(sessionStorage.getItem('newStudent'));
        let enrolledStudent = [];

        // Get the password and confirmed passwords.
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const confirmedPassword = document.querySelector('#confirm-pass');

        if (isPasswordMatch(password.value, confirmedPassword.value)) {

            newStudent['studentEmail'] = email.value;
            newStudent['studentPassword'] = password.value;
        } else {

            
        }
        

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

    return password === confirmPassword;
}
console.log(JSON.parse(localStorage.getItem('enrolledStudent')));