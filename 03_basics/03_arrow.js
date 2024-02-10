const user={
    username:"mihir",
    price:999,
    welcomMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// this=>refers to current context 
// console.log(user.welcomMessage());
// user.username="Sameer"
// console.log(user.welcomMessage());

console.log(this); //node=>empty object browser=>window object
function chai(){
    let username="hitesh"
    console.log(this.username)
}
chai()
// this => object pari function bhitare kama kari pareni se jou bi function heu 

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2 implicit return
// const addTwo=(num1,num2)=> (num1+num2) //moon bracket dele return keyword lekhiba darkar nahni
const addTwo=(num1,num2)=> ({name:"supriya"}) //how to return object
console.log(addTwo(4,6));