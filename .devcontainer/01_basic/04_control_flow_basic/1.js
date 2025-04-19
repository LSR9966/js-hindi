const a=true;

if(a===true){
    console.log("hello");
}

if(2==="2"){
    console.log("this is equal"); //=== also check the datatype  
}

const b=17;

if(b%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

const score=100;  //var completed global
if(score==100){
    let power='fly';
    console.log(`User Power: ${power}`);   
}

const balance=561;

if(balance>500){
    console.log('greater than');
}
else if(balance<500)
{
    console.log('less than');
}
else
{
    console.log('it is equal');
}


