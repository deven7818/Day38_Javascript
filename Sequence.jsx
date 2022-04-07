
//1. Sequence Practice Problems
//Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
let number = Math.floor(Math.random() * 10);
console.log("Single Digit Random number is :" + number + "\n");

//Use REPL – Use Random to get Dice Number between 1 to 6
let diceNumber = Math.floor((Math.random() * 10) % 6) + 1;
console.log("Dice Number between 1-6 is :" + diceNumber + "\n");

//Reads 5 Random 2 Digit values ,then find their sum and the average
let num1 = Math.floor((Math.random() * 100));
let num2 = Math.floor((Math.random() * 100));
let num3 = Math.floor((Math.random() * 100));
let num4 = Math.floor((Math.random() * 100));
let num5 = Math.floor((Math.random() * 100));

let sum = (num1 + num2 + num3 + num4 + num5);
console.log("Sum of 5 d=Random 2 digit values is :" + sum + "\n");
let average = (sum / 5);
console.log("Average of 5 d=Random 2 digit values is :" + average + "\n");

//Unit Conversion
console.log("Unit Conversion")

//Inch to feet conversion
console.log("a)Inch to Feet conversion :")
console.log("1ft = 12inch");
var inchToFeet = 42 / 12;
console.log("42 inch = " + inchToFeet + " feet " + "\n");

//Area of rectangular plot
console.log("b)Area of Rectangular Plot:-");
console.log("Dimensions = 60feet * 40feet");
var area = 60 * 40;
console.log("Area = " + area + " sq. feet " + "\n");

//Area of 25 plots in acres
console.log("c)Area of 25 such plots is :");
var area25 = area * 25;
console.log("Area of total plots = " + area25 + " acres" + "\n");
