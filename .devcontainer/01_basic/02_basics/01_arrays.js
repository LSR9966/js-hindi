const myarr=[0,1,2,3,4,5,'lalit','right','true'];
const hero=new Array(1,2,3,4,5)

console.log(hero);

console.log(myarr);


//ARRAY METHODS and SLICE & SPLICE IMPORTANT FOR INTERVIEW

hero.push(6);
hero.push(9);
hero.pop()
console.log(hero);

hero.unshift(1);
console.log(hero);

console.log(hero.includes(4));
console.log(hero.indexOf(1));

//join
const newarr=hero.join();
console.log(newarr); //string me convert kae dega join
console.log(typeof newarr)

console.log("A",myarr);
console.log(myarr.slice(1,7));

console.log("B",myarr);

console.log(myarr.splice(3,7));  //DIFFERENCE BETWEEN SLICE AND SPLICE..                                 //Slice doesn't modify original array and doest include end
console.log(myarr);              //Splice change original array and atleast
                                 //contain one start and end is also included


