const score=400
console.log(score);

const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

console.log(typeof balance);

const otherNumber=23.678
console.log(otherNumber.toPrecision(2));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) // indian values ke hisab se comma lagtaa hia

//*********************** MATHS *********************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(67.8));
console.log(Math.ceil(5.123)); // jara sa be number baada hua to ye usko upper 'n'+1 me convert kar dega
console.log(Math.floor(5.1)); // ye n me kar degaa
console.log(Math.min(4,6,78,9));
console.log(Math.max(5,6,78,88));
console.log(Math.random()*10); // NUMBER ALWAYS BETWEEN 0-1

let max=25;
let min=20;

console.log(Math.floor(Math.random()*(max-min+1) +min));









