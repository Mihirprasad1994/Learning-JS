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
