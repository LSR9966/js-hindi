function myname(){
    console.log("h")
    console.log("a")
    console.log("b")   
    console.log("b")
    console.log("i")
    console.log("t")    
}
myname() //() execute karne me help karta hai

function addnum(num1,num2){ //parameter
    console.log(num1+num2)
}
const result=addnum(3,5) //arguments
console.log("result : ",result); // result: undefined....

function mulnum(num11,num22){
    let res=num11*num22;
    return res;
}
const res=mulnum(10,20);
//console.log("res : ",mulnum);

function another(username){
    if(username===undefined)
        console.log("PLEASE ENTER THE USER NAME");
    else     
    return `${username} just logged in`
}
console.log(another());

function calculateCartPrice(val1,val2,...num1){  //rest operator 
    return num1
}
console.log(calculateCartPrice(100,200,300,400,500));

const user={
    username:"lalit",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject({
    username:"sam",
    price:399
}
)

const myArray=[200,400,600,800]

function returnSecond(getarray){
    return getarray[2]
}
console.log(returnSecond(myArray));
console.log(returnSecond([100,300,500,700]));



