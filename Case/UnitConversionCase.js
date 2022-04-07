"use strict";

const ps = require("prompt-sync");
const prompt = ps();

while (true) {
    const num = prompt("\n Enter the number : ");
    var feetToInch = (num * 12 + "inch");
    var inchToFeet = (num / 12 + "feet");
    var feetToMeter = (num * 0.30 + "meter");
    var meterToFeet = (num * 3.28 + "feet");
    console.log("1) Feet to Inch");
    console.log("2) Inch to Feet");
    console.log("3) Feet to Meter");
    console.log("4) Meter to Feet");

    const op = prompt("Choose the operations want to perform :")

    switch (op) {
        case '1':
            console.log(feetToInch);
            break;
        case '2':
            console.log(inchToFeet);
            break;
        case '3':
            console.log(feetToMeter);
            break;
        case '4':
            console.log(meterToFeet);
            break;
        default:
            console.log("Please Ente correct input:");
    }
}