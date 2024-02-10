var c=300
let a=200
if(true){
    let a=10;
    const b=20;
    var c=30
}
console.log(a);
// console.log(b);
console.log(c);
function one(){
    let friend1="liku"
    function two(){
        let friend2="diza"
        console.log(friend1);
    }
    // console.log(friend2);
    two()
}
one()
hello()
function hello(){
    console.log("hello")
}
hi()
const hi=function(){
    console.log("hi")
}