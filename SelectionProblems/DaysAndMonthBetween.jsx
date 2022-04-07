"use strict";
const ps = require("prompt-sync");
const prompt = ps();
const date = prompt("Enter the date :");
const month = prompt("Enter the month :");
if(month >3 && month <=6 && date<= 31 && date > 1){
    console.log(true)
}
else{
    console.log(false);
}