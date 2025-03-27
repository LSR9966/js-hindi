const name="lalit"
const marks=56

console.log(`Hello my name is ${name} and my marks is ${marks}`);

const gamename=new String('laliiitt')
console.log(gamename[0]);
console.log(gamename[4]);
console.log(gamename.__proto__);    //2 underscore hai

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));

const newString=gamename.substring(0,3);  //last wala include in hogaa
console.log(newString);

const secString=gamename.slice(-6,5);
console.log(secString);

const gk="    gautam  ";
console.log(gk);
console.log(gk.trim());  // trim starting and end ke space ko trim/remove kar degaa

const url="https://hitesh.com/";
console.log(url.replace('.com','+++'));
console.log(url.includes('hitesh'));

const yash='la-ya-ra';
console.log(yash.split('-'));

















