let xx = prompt("How many courses you wanted to enter: ");
var course =[];
for (let x =0; x<xx; x++)
{   course[x]= prompt("Name your course No. "+(x+1));
}
alert(course);
for (let y =0; y<xx;y++)
{   course[y]=prompt("Do you want to change "+course[y]);
    course.splice(y,course[y]);
}
alert(course);


