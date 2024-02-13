const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(`the value is ${num}`);
}

const fullName="mihir prasad bhuyan"
for (const name of fullName) {
    console.log(`value is ${name}`);
}
const map=new Map()
map.set("IN","India")
map.set("RSA","south africa")
map.set("FR","france")
map.set("FR","sura")
console.log(map)
const obj={
    name:"mihir",
    college:"ravenshaw"
}
// console.log(obj);

for (const [key,value] of map) {
    console.log(`${key},${value}`);
}