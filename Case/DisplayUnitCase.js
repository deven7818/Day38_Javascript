//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,... using switch case

"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const num = prompt("Enter the number : ");

let word;
switch (x) {

    case '10':
        word = "Ten";
        break;
    case '1':
        word = "Unit";
        break;
    case '100':
        word = "Hundred";
        break;
    case '1000':
        word = "Thousand";
        break;
    case '10000':
        word = "Ten Thousand"
        break;
    case '100000':
        word = "Lakh"
        break;
    default:
        word = "Enter valid number";
}
console.log(word);