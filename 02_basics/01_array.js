const myArr=[0,1,2,3,4,5]
const myHeros=["shaktima","nagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

// Methods of Array 
// Push pop unshift shift 
// includes=>check a element exist or not return true/false. indexOf join=>converts the array into string

/*
difference between slice and splice
slice=>doesnot maipulate origial array
splice=>manipulates original array
*/
// ***********************************************
const myArray=[0,1,2,3,4]
const myArray2=new Array(5,6,7,8)
console.log(myArray);
// myArray2.push(9,10,11)
// const poppedItem=myArray2.pop()
// console.log(poppedItem);
// myArray2.unshift(1,2,3)
// myArray2.shift()
// console.log(myArray2.includes(4));
// console.log(myArray2.indexOf(5));
// console.log(myArray2.join());
// console.log(myArray2.slice(0,2));
// console.log(myArray2.splice(0,2));
console.log(myArray2);
const marvelHeros=["liku","honey","diza"]
const dcHeros=["mihir","sameer","lau"]
// const allHeros=marvelHeros.concat(dcHeros)
const allHeros=[...marvelHeros,...dcHeros]
// console.log(allHeros);

const array1=[1,[2,3,[4,5,[6,7,[8,9,[10]]]]]]
const newArray=array1.flat(Infinity)
console.log(newArray);

console.log(Array.isArray("Mihir"));
console.log(Array.from("mihir"));
console.log(Array.from({name:"mihir"}));
let x=10,y=20,z=30
console.log(Array.of(x,y,z));