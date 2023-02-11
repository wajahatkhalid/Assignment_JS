
let H= 0, W= 0, Finalvalue=0, meterH=0; 
const valueCM = 2.54, valuePound = 2.2046, valueMeter=39.37;

H= parseInt(prompt("Enter Height in Inches : "));
W= parseInt(prompt("Enter Weight in Pounds : "));
console.log("The height in cm "+(H*valueCM)+", weight in Kgs "+(W/valuePound));
meterH = H /valueMeter;
Finalvalue = (W/valuePound) / (meterH**2); 

console.log("BMI : "+Finalvalue);