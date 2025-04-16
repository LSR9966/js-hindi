
let a=100;

if(true){
    let a=10
    const b=20
    var c=30 //var should be avoided
    console.log("INNER : ",a);
}

console.log(a);
//console.log(b);
console.log(c); //var print ho raha hia jabki hona nahi chaye kyoki ye define hai hi nahi

//ESLIYE VAR KO JALDI USE NI KARTE

function one(){
    const username="lalit"

    function two(){
        const website="you tube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

if(true){
    const username="gk"
    if(username==="gk"){
        const website="google"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//******************************* INTERESTING ***********************************/

console.log(addone(6))
function addone(num){
    return num+1
}
//addone(5)

//console.log(addtwo(8)) error aayega hosting bolte hia esko aase access ni karege hum
const addtwo=function(num){ //variable and expression
    return num+2
}

