//reduce
const mynum=[1,2,3,4,5]

const mytotal=mynum.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc+currval
},0)

console.log(mytotal);

const shopping=[
    {
        itemName:"js course",
        price:2999
    },

    {
        itemName:"cpp course",
        price:1999
    },

    {
        itemName:"java course",
        price:999
    },

    {
        itemName:"python course",
        price:1499
    },
]

const pricetopay=shopping.reduce((acc,item) => acc + item.price,0)
console.log(pricetopay);

