let score=true

console.log(typeof score)
console.log(typeof (score));
let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);

/*
"33"=>33
"33asdf"=>NaN
true=>1
null=>0
undefined=>NaN
*/
let isLoggedIn="Mihir"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1=>true 0=>false
""=>false
"mihir"=>true
*/
let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ********************************************************
//OPERATION
console.log("1"+2+2);
console.log(1+2+2+"4");
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"