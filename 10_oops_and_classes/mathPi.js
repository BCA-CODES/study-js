const car = {
    name: "tesla",
    type: "electric",
    price: "$20000",

    bookCar : function () {
        console.log("car is not booked");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car,'name',{
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(car, "name"));

for (let [key,value] of Object.entries(car)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}