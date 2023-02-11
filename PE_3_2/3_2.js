let a = ["Milk","Bread","Apples"]
a.splice(1,0,"Bananas","Eggs")
console.log(a);
a.pop();
console.log(a);
a.sort();
console.log(a.indexOf("Milk"))
let ibanana = a.indexOf("Bananas");
a.splice(ibanana,0,"Carrot","Lettuce");
let b =["Juice", "Pop"];
a= a.concat(b);
a= a.concat(b);
console.log(a.lastIndexOf("Pop"));
console.log(a);