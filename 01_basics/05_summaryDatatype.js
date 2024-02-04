/*
on the basics of how values are stored in memory datatypes are of two types.primitive and non primitive.callbyvalue and call by refrence.

1)Primitive=string,number,Bigint,boolean,null,undefined,symbol
2)Non-primitive=array,object,fuction
*/
let str="mihir"
let num=101.3
let bigNumber=1234567890123456789012345678901234567890n
let bool=true
let nu=null
let ud=undefined
let func=()=>{}
console.table(typeof str)
console.table(typeof num)
console.table(typeof bigNumber)
console.table(typeof bool)
console.table(typeof nu)
console.table(typeof ud)
console.table(typeof func)