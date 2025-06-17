//for of 

const arr=[1,2,3,4,5]
for (let i of arr) {
    //console.log(i);
}

const greeting="HELLO WORLD"
for(const i of greeting){
    //console.log(i);   
}

//MAPS only contain unique key-value and remember the original order
const map=new Map()
map.set('IN',"India")
map.set('USA',"AMERICA")
map.set('fn',"france")

console.log(map);

for (const [key,value] of map) {
    console.log(key,": ",value);  
}

const myobj={
    Game1:'NFS',
    Game2:'spiderman'
}

for (const [key,value] of myobj) {
    console.log(key,':',value);
       
}