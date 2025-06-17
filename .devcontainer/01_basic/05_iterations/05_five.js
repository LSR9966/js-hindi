//forEach loop
const coding=['js','ruby','java','cpp']
coding.forEach(function (name) {
    console.log(name);
})


function printme(item){
    console.log(item);   
}

coding.forEach(printme)

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr); 
})