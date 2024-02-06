const marvelHeros=["hapi","bapi","lala"]
const dcHeros=["mihir","sameer","aju"]
// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// const allHeros=marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros=[...marvelHeros,...dcHeros]
console.log(allNewHeros);
const anotherArray=[1,2,3,[4,5,6,[7,8,9,[10,11,[12,13]]]]]
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray)
console.log(Array.isArray("mihir"));
console.log(Array.from("mihir"));
console.log(Array.from({name:"mihir"}));//interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
