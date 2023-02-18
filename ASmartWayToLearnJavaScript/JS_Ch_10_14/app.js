var x =prompt("Your First Number");
var y =prompt("Your Second Number");
var numVariable =prompt("Give the operation to be performed");
var num1 = parseInt(x);
var num2 = parseInt(y);
var result; 
if(numVariable =="+")
    {   result =  num1 +num2;}
else if (numVariable =="-")
    {  result =  num1 - num2;}
else if (numVariable =="*")
    {  result =  num1 * num2;}  
else if (numVariable =="/")
    {  result =  num1 / num2;}  
else if (numVariable =="%")
    {  result =  num1 % num2;}  

alert(num1+" "+numVariable+" "+num2+" = "+result);