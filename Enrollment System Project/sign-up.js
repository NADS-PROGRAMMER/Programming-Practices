"use strict";

import Student  from "./Modules/student.js";


document.addEventListener('DOMContentLoaded', () => {

    // Event for the dropdown menu for countries.
    document.querySelector('#countries').addEventListener('change', function() {

        let otherCountryField = document.querySelector('.other-countries');
        let otherCountry = document.querySelector('#other-country');

        if (this.value === 'Other') {

            setTimeout(function() {

                otherCountryField.style.animation = 'none';
            }, 300);
            otherCountryField.style.animation = 'showAnimation 300ms';
            otherCountryField.style.display = 'block';
            otherCountryField.classList.add('input-field');
            otherCountry.classList.add('input-field');
        } 
        else {
            otherCountryField.style.display = 'none';
            otherCountry.classList.remove('input-field');
        }
            
    })

    // Event for the dropdown menu for courses.
    document.querySelector('#course').addEventListener('change', function() {

        let otherCourseField = document.querySelector('.other-course');
        let otherCourse = document.querySelector('#other-course');

        if (this.value === 'Other') {

            setTimeout(function() {

                otherCourseField.style.animation = 'none';
            }, 300);
            otherCourseField.style.animation = 'showAnimation 300ms';
            otherCourseField.style.display = 'block';
            otherCourse.classList.add('input-field');
        }
        else {
            otherCourseField.style.display = 'none';
            otherCourse.classList.remove('input-field');
        }
            
    });

    // Event for button.

    document.querySelector('button').addEventListener('click', () => {

        if (!isAllFilledUp())
            alert('Please fill up');
        else
            alert('success');
    })
});

function isAllFilledUp() {

    let inputFields = document.querySelectorAll('.input-field');
    let isFilledUp = true;

    inputFields.forEach(inputField => {

        if (!(String(inputField.value))) {

            isFilledUp = false;
            inputField.style.border = '2px solid red';
            
            inputField.addEventListener('change', () => inputField.style.border = 'none');
        }
    });

    return isFilledUp;
}
