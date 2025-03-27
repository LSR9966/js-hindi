const marvel=['hulk','ironman','vision','thor']
const dc=['superman','batman','flash','women']

//marvel.push(dc);
//console.log(marvel);

//const all=marvel.concat(dc);
//console.log(all);

const all=[...marvel,...dc];
console.log(all);

let ab=[1,2,3,[4,5,6],7,8,9,[12,13,15]];
console.log(ab);

let real=ab.flat(Infinity);
console.log(real);

console.log(Array.isArray(dc));
console.log(Array.from("lalit"));
console.log(Array.from({name: "lalit"})); //interesting case because we dont know which one to convert

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); //2-3 value ka array bana degaa




