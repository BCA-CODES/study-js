const mynums = [11,22,33]

// const realnums = mynums.reduce(function (acc,currentvalue) {
//     return acc + currentvalue
// },0)

// console.log(realnums);

const realnums = mynums.reduce( (acc,currentvalue) => acc + currentvalue ,0)

// console.log(realnums);


const mycart = [
    {
        itemname:"mouse",
        price:250
    },
    {
        itemname:"monitor",
        price:5500
    },
    {
        itemname:"keyboard",
        price:750
    },
    {
        itemname:"CPU",
        price:10500
    }
]

const myshoppingCart = mycart.reduce( (acc,items) => acc + items.price ,0)

console.log(myshoppingCart);
