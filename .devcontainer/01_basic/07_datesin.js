let myDate=new Date()
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());

let mycreatedDate=new Date(2025,0,23);
console.log(mycreatedDate.toDateString());

let specific=new Date("2025-03-26");
console.log(specific.toLocaleString());

let mytimestamp=Date.now();
console.log(mytimestamp);  // eska output milli second hai jabse timestamp suru hua haii
console.log(specific.getTime());
console.log(Math.floor(Date.now()/1000)); // MS ko milli second me convert kar diyaa

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:""
})










