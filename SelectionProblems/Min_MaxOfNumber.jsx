//Selection Problem wit if & else

//Reads 5 random 3 digit values and then print minimum and maximum value
const num1 = Math.floor(Math.random() * 1000);
const num2 = Math.floor(Math.random() * 1000);
const num3 = Math.floor(Math.random() * 1000);
const num4 = Math.floor(Math.random() * 1000);
const num5 = Math.floor(Math.random() * 1000);

console.log("5 random 3 digit numbers are :" + num1 + "," + num2 + "," + num3 + "," + num4 + "," + num5);
console.log("Minimum value is :" + Math.min(num1, num2, num3, num4, num5));
console.log("Maximum value is :" + Math.max(num1, num2, num3, num4, num5));