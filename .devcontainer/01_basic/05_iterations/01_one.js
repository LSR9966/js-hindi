//for
let element=1;
for (let index = 0; index < 10; index++) {
    element = index;
    //console.log(element);   
}

console.log(element);

for (let i = 0; i <=10; i++) {
    //console.log(`Outer loop: ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop value:${j} and inner loop ${i}`);
        //console.log(i + 'x' + j +'='+i*j);    
    }
}

let myarray=["flash","batsman","superman"]

for (let index = 0; index < myarray.length; index++) {
    let element = myarray[index];
    console.log(element);   
}

//BREAK AND CONTINUE

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(i);
        break;
    }
    console.log(i);
}