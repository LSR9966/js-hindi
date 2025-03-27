//singleton : apne tarike ka ek hi hota haai constructor me singletons hoga
//literals me singleton ni hota

//OBJECT LITERALS

const mysys=Symbol("keys");
const JsUser={
    name:"lalit",
    "full name":"singh rawat", //THAT'S WHY WE DON'T USE .access method
    [mysys]:"mykeys",
    age:21,
    location:"delhi",
    email:"gmial.com",
    islogged:false,
    lastlogging:["Monday","SUNDAY"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);//PRIORITY
console.log(JsUser[mysys]);

JsUser.email="ggmail.com"
//Object.freeze(JsUser); //freeze se voo change ni hogaa

JsUser.email="yahoo.com";
console.log(JsUser.email);

console.log(JsUser);

JsUser.greeting=function(){
    console.log("HELLO JS USER,WHAT'S UP")
}

JsUser.greetingTwo=function(){
    console.log(`HELLO JS USER,${this.name} WHAT'S UP`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());









