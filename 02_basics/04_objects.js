const tinderUser=new Object()
//single ton object
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullname:{
            firstName:"mihir",
            lastName:"prasad"
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={2:"a",3:"b"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)

// [{},{},{}]
// this property is important 
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"))

// ****************************************************
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseName,price,courseInstructor:instructor}=course
console.log(courseName,price,instructor);

// https://api.github.com/users/hiteshchoudhary 