//singleton=> object formed by constructor

//object literals

const mySym=Symbol("key1")
const JsUser={
    name:"mihir",
    "full name":"mihir prasad bhuyan",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"mihir@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

// Object.freeze(JsUser)
JsUser.email="mihir@microsoft.com"
console.log(JsUser.email);


JsUser.greeting=function(){
    console.log("hello JS user")
}
JsUser.greetingTwo=function(){
    console.log(`i am ${this["full name"]}`);
}
console.log(JsUser.greeting)
console.log(JsUser.greetingTwo())