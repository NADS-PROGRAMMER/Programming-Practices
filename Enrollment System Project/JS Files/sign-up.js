"use strict";


document.addEventListener('DOMContentLoaded', () => {

    // Event for the dropdown menu for countries.
    document.querySelector('#countries').addEventListener('change', function() {

        let otherCountryField = document.querySelector('.other-countries');

        if (this.value === 'Other') {

            setTimeout(function() {

                otherCountryField.style.animation = 'none';
            }, 300);
            otherCountryField.style.animation = 'showAnimation 300ms';
            otherCountryField.style.display = 'block';
        } 
        else
            otherCountryField.style.display = 'none';
    })

    // Event for the dropdown menu for courses.

    document.querySelector('#course').addEventListener('change', function() {

        let otherCourseField = document.querySelector('.other-course');

        if (this.value === 'Other') {

            setTimeout(function() {

                otherCourseField.style.animation = 'none';
            }, 300);
            otherCourseField.style.animation = 'showAnimation 300ms';
            otherCourseField.style.display = 'block';
        }
        else
            otherCourseField.style.display = 'none';
    });
});