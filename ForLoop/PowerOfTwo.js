//prints a table of the powers of 2

"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const n = prompt("Enter the value of n : ");
for (var i = 1; i <= n; i++) {
    var table = 2 * i;
    console.log("2 * " + i + " = " + table);
}