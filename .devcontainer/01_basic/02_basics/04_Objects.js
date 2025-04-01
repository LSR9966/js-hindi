const tinderUser=new Object()//singlton object
const tinderUser2={} //non singleton object
//console.log(tinderUser);
//console.log(tinderUser2);

tinderUser.id=234
tinderUser.name="lalit"
tinderUser.islogged=false;

console.log(tinderUser);

const regularuser={
    emial:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:'lalit',
            secondname:'second',
        }
    }
}

console.log(regularuser.fullname);

const obj1={1:"a",2:"b",3:"c"}
const obj2={3:"d",4:"e"}

//const obj3={obj1,obj2}

const obj3=Object.assign({},obj1,obj2) //{} target
console.log(obj3);                     //baaki hamree source hai sirf

const obj4={...obj1,...obj2};           //spread method is also used
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogged'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseduration:"4months"
}

const {courseduration: ab}=course
const {price:paisa}=course
console.log(ab,paisa);

//react 
const navbar=({company})=>{ //destructing 

}
navbar(company="gautam");


//JSON : JAVASCRIPT OBJECT NOTATION
{
    name:"lalit",
    age=30,
    salary="40"
}

[
    {},
    {},
    {}
]







