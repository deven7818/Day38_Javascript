"use-strict"
const ps = require("prompt-sync");
const prompt = ps();


const a = prompt("Enter 1st number = ");
const b = prompt("Enter 2nd number = ");
const c = prompt("Enter 3rd number = ");

var op1 = (a + (b * c));
var op2 = ((a % b) + c);
var op3 = (c + (a / b));
var op4 = ((a * b) + c);


console.log("1) a+b*c = " + op1);
console.log("2) a%b+c = " + op2);
console.log("3) c+a/b = " + op3);
console.log("4) a*b+c = " + op4);

if(op1 > op2){
    if(op1 > op3){
        if(op1 > op4){
            console.log("Maximum value is : " + op1);
        }else{
            console.log("Maximum value is :" + op4);
        }
    }else if(op3 > op4){
        console.log("Maximum value is :" + op3);
    }else{
        console.log("Maximum value is :" + op4);
    }
}else if(op2 > op3){
    if(op2 > op4){
        console.log("Maximum value is :" + op2);
    }else{
        console.log("Maximum value is :" + op4);
    }
}else if(op3 > op4){
    console.log("Maximum value is :" + op3);
}else{
    console.log("Maximum value is :" + op4);
}
console.log("Minimum value is : " +Math.min(op1, op2, op3, op4));
