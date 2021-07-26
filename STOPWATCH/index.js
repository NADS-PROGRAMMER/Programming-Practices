"use strict";

// Global Variables.
let time = 0;
let minutes = 1;
let seconds = 1;
let milliseconds = 1;

document.addEventListener('DOMContentLoaded', () => {

    // Events for start button.
    document.getElementById('start-button').onclick = () => {

        if (time == 0)
            start();
    }

    // Events for stop button.
    document.getElementById('stop-button').onclick = () => {

        clearInterval(time);
        time = 0;
    }

    // Events for reset button.
    document.getElementById('reset-button').onclick = () => {

        seconds = 1;
        milliseconds = 1;
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('milliseconds').textContent = '00';
    }
});

function start() {

    time = setInterval(() => {

        // Update the value of the milliseconds every 100 ms set by the interval.
        document.getElementById('milliseconds').textContent = 0 + "" + milliseconds;
        milliseconds += 1; // add 1 to it.

        if (milliseconds > 9) {
            
            if (seconds < 10)
                document.getElementById('seconds').textContent = 0 + "" + seconds;
            else 
                document.getElementById('seconds').textContent = seconds;

            if (seconds >= 59) {

                if (minutes < 10)
                    document.getElementById('minutes').textContent = 0 + "" + minutes;
                 else
                    document.getElementById('minutes').textContent = minutes;
                 minutes += 1;
            }
            
            milliseconds = 0;
            seconds += 1;
           

            if (seconds > 59)
                seconds = 1;
        }
            
    }, 100)
}