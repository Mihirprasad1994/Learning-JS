const name="Mihir"
const repoCount=2;
console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("Mihir-prasad-bhuyan")
/*
here gameName is a object it is a string also
the gameName string has length property
there are many methods in the prototype of gameName object
*/
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());//origial string ku mutate karei coz stack memory
console.log(gameName.charAt(3));
console.log(gameName.indexOf("M"));
const newString=gameName.substring(0,3)
console.log(newString);
const anotherString=gameName.slice(-4,5)
console.log(anotherString);
const newStringOne="         Mihir      "
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20","**"));
console.log(url.includes("mihir"));
console.log(gameName.split("-"));

/*
Different Methods of String

toUpperCase,toLowerCase
charAt,charCodeAt
indexOf,lastIndexOf
subString
slice
trim
replace
includes=>true/false
split
concat
constructor
endsWith
valueOf
toString
*/
let string1="mihir prasad bhuyan!"
let string2="sameer prasad bhuyan"
let string3= new String("devi prasad bhuyan")

console.log(string1.toUpperCase())
console.log(string1.charAt(7))
console.log(string1.charCodeAt(7))
console.log(string1.indexOf("z"))
console.log(string1.lastIndexOf("bhuyan"))
console.log(string1.substring(0,9))
console.log(string1.slice(-18,12))
console.log(string1.trim())
console.log(string1.replace("prasad","kumar"))
console.log(string1.includes("kumar"))
console.log(string1.split(" "))
console.log(string1.concat(" ",string2))
console.log(string1.endsWith("bhuyan!"))
console.log(typeof string3);
console.log(typeof string3.toString());
