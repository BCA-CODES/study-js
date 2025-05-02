//foreach

const cars = ["tesla","byd","gml","toyota","tata"]

// cars.forEach(function (val){
//     console.log(val);
// })

// cars.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// cars.forEach(printMe)

// cars.forEach( (val, index, arr) => {
//     console.log(val,index,arr);
// })

const cars2 = [
    {
        carname:"tesla",
        cartype:"diesel"
    },
    {
        carname:"gml",
        cartype:"petrol"
    },
    {
        carname:"byd",
        cartype:"electric"
    }
]

cars2.forEach( (things) => {
    console.log(things.cartype);
    
})