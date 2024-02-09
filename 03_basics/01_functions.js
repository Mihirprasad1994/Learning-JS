// function=> 10 ba 15 line ra code taku ame wrap kari daba.sei wrapping ra reference ku ei ame further kama kari ba
// function sayMyName(){} 1keyword 2 name 3 parenthisis 4 scope 
function sayMyName(){
    console.log("m");
    console.log("i");
    console.log("h");
    console.log("i");
    console.log("r");
}
// sayMyName() 1 reference 2 execution 
sayMyName()

function addTwoNumbers(number1,number2){
    let sum=number1+number2
    return sum
    console.log("mihir")
}
const result=addTwoNumbers(4,5)
console.log(result)

function calculateCartPrice(...sum){
    return sum
}
console.log(calculateCartPrice(100,200,300,400,500));

const user={
    userName:"mihir",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)

const myNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));