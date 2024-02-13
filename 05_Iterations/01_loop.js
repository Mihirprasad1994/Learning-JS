//for
for(i=0;i<=10;i++){
    const element=i
    if (element==5) {
        console.log("5 is best number");
    }
    console.log(element);
}
for (let i = 0; i <=5; i++) {
    console.log(`outer loop :${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`innerloop:${j}`);
    }
    
}

let myArray=["flash","batman","superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

for (let i = 1; i <=10; i++) {
    if (i==6) {
        console.log("6 is detected");
        continue;
    }
    console.log(i);
}

for (let i = 0; i <=20; i++) {
    if(i===7){
        console.log("7 is detected");
        break;
    }
    console.log(i);
}
