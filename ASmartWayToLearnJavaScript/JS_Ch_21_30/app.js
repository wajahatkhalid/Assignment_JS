let x = prompt("Give a Demcimal number: ");
alert(Math.ceil(x));

var simpleText = "Example text is this.";
alert(simpleText);
var spaceIndex = simpleText.indexOf(' ');
var wordSliced= simpleText.slice(0,spaceIndex);
let reverseText="";
for (let x=wordSliced.length-1;x>=0; x--)
{   reverseText += wordSliced[x];
}
alert("Reversed First Word: " + reverseText);