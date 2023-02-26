var course =[];
var course1 =prompt("course1")
course.push(course1);
var course2 =prompt("course2")
course.push(course2);
var course3 =prompt("course3")
course.push(course3);

alert(course);

course1=prompt(course1,course[0])
course.splice(0,0,course1)
course2=prompt(course2,course[1])
course.splice(1,1,course2)
course3=prompt(course3,course[2])
course.splice(2,2,course3)


alert(course);