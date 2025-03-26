//PRIMITIVE 7 TYPES
/*
STRING
NUMBER
BOOLEAN
NULL
UNDEFINED
BIGINT
SYMBOL
*/

const id=Symbol('123')
const mail=Symbol('123')
console.log(id===mail)

const bignumber=34567876543345n
console.log(bignumber);


/*JavaScript is a dynamically typed language.
 This means that variable types are determined at runtime, 
 and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime
*/

//NON-PRIMITIVE OR REFERENCE 
/*
Array,Objects,Functions

*/

const hero=["shaktiman","naagraj","doga"];//array

let myObj={
    name:"lalit",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}
console.log(myObj);
console.log(typeof myObj);



/*
.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.

*/