var course1 =parseInt(prompt("Enter Marks of First Course : "));
var course2 =parseInt(prompt("Enter Marks of Second Course : "));
var course3 =parseInt(prompt("Enter Marks of Third Course : "));
var course4 =parseInt(prompt("Enter Marks of Fourth Course : "));
var course5 =parseInt(prompt("Enter Marks of Fifth Course : "));
var totalMarks =500;
var obtainedMarks = course1+course2+course3+course4+course5;
var percentage = obtainedMarks *100 /totalMarks; 
alert("Your Percentage : "+percentage);