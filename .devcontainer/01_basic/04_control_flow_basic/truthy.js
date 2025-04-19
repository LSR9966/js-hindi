//falsy value

// false,0,-0,BigInt 0n,empty String,NULL,undefined,NaN

//truthy value
// true,"0",'false'," ",[],{},function(){},

const emptyobj={};

if(Object.keys(emptyobj).length===0)
    console.log("object is empty");

//NULLISH COALESCING OPERATOR (??):null defined

let vall;
//vall=5??10
vall=null ?? 10 ?? 40

console.log(vall);

//terniary operator

//condition?true:false;

const price=200;
price==200?console.log('true'):console.log('false');
