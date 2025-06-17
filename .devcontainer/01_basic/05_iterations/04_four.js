// FOR in

const myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobj) {
    console.log(`${key} is the shortcut for ${myobj[key]}`);   
}

//FOR IN ME KEYS PRINT ME 0,1,2,3,4,5,6
let pro=['js','cpp','python','ruby']
for (const key in pro) {
    console.log(pro[key]);
}

//MAP IS NOT ITERATABLE
const map=new Map()
map.set('IN',"India")
map.set('USA',"AMERICA")
map.set('fn',"france")

for (const key in map) {
    console.log(key);
    //KUCH BE PRINT NI HOGAA   
}

