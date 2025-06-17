//const coding =["js",'coding','python','cpp','swift']
//FOREACH RETURN NI KARATA HAII

//const values= coding.forEach( (item) =>{
   // console.log(item);  
//})

//console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]

/*let a=mynums.filter( (num) => num>5 )
let b=mynums.filter((n) => {
    return n<5;
})
console.log(a);
console.log(b); */

const newnum=[]
mynums.forEach( (num) => {
    if(num>4) {
        newnum.push(num)
    }
})
console.log(newnum);





