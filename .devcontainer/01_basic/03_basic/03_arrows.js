const user={
    username:"lalit",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`); //this current context ko refer karta hai
    }
}
user.welcomemessage()
user.username="sam"  // pe context change ho gaya "context me kise baari me hia kya value "
user.welcomemessage()

console.log(this) //this give {} as output ,EMPTY OBJECT

//GLOBAL OBJECT JO AABI HAI VO HAI WINDOW

function chai(){
    let username="lalit";
    console.log(this.username);
}
chai()


const tea=() => {
    let user="yash"
    console.log(this.user);
}

const addtwo=(num1,num2) => num1+num2  //ek hi line me aa jayega jab hume sirf 1 return karana hoo
const addone=(a,b) => (a+b)  // {} me hoge to return pakaa aayega verna return nahi aayegaa
const add=(a,b)=> ({username:"lalit"}) // {} me hia to return too hogaa bhyii


console.log(addtwo(4,5))
console.log(addone(6,7));
console.log(add(34,5));