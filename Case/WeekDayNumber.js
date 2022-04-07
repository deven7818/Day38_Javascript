//Read a Number and Display the week day (Sunday, Monday,...) using switch case

"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const num = prompt("Enter a Weekday number = ");

let word;
switch (num) {

    case '1':
        word = "Monday";
        break;
    case '2':
        word = "Tuesday";
        break;
    case '3':
        word = "Wednesday";
        break;
    case '4':
        word = "Thursday";
        break;
    case '5':
        word = "Friday";
        break;
    case '6':
        word = "Saturday";
        break;
    case '7':
        word = "Sunday";
        break;
    default:
        word = "Not a Weekday ";
}
console.log(word);