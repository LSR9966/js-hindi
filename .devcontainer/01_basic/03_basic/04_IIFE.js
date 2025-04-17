//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
console.log('hello');

(function chai(){
    console.log("hello");
})(); //2 iife use karege to ; lagegaa

//global scope ke pollution se problem hote hai usko solve karne ke liye use hoga hai

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("lalit")

