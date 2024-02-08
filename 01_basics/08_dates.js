let myDate=new Date();
/*
console.log(myDate.toString());
Mon Feb 05 2024 15:31:59 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
Mon Feb 05 2024
console.log(myDate.toISOString());
2024-02-05T15:33:47.494Z
console.log(myDate.toJSON());
2024-02-05T15:35:29.633Z
console.log(myDate.toLocaleString());
2/5/2024, 3:37:20 PM
console.log(myDate.toLocaleDateString());
2/5/2024
*/

// let myCreatedDate= new Date(2024,1,5);
// let myCreatedDate= new Date("02-05-2024");
// console.log(myCreatedDate.toDateString())
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
//  ***************************************************** 

myCreatedDate=new Date("05-15-2023")
console.log(myCreatedDate.toString());
myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(myCreatedDate.getTime()/1000));