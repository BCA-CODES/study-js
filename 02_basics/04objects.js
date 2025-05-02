// const myobject = new Object()

const myobject = {}

myobject.email = "dev@gmail.com"
myobject.name = "John Doe"
myobject.age = 30

// console.log(myobject);

const realobject = {
    email : "dev@google.com",
    username:{
        fullnames: {
            firstname: "dev",
            lastname: "virani"
        }                
    }    
}

//console.log(realobject.username.fullnames?.firstname);


let obj1 = {1: "A", 2: "B" }
let obj2 = {3: "C", 4: "D" }
//let obj3 = {1: "A", 2: "B" }

let obj3 = {...obj1, ...obj2}
// let obj3 = {obj1,obj2}
// let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// console.log(myobject);
// console.log(Object.keys(myobject));
// console.log(Object.values(myobject));
// console.log(Object.entries(myobject));

// console.log(myobject.hasOwnProperty('islogin'));



const degree = {
    degreeName: "BCA",
    time: "3 years"
}

// console.log(degree.degreeName);
const {degreeName: name} = degree
console.log(name);

