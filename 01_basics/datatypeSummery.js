/* primitive type
string, number, boolean, null, symbol, undefined


non-primitive type
array, object, function
*/

//string
let firstname = "virani"
// console.log(typeof firstname)

//number
let num = 25.3
// console.log(typeof num);

//boolean
let islogin = false
// console.log(typeof islogin);

//null
let email = null
// console.log(typeof email);

//symbol
let id = Symbol("521")
let secondid = Symbol("521")

// console.log(id == secondid);


// array
const cars = ['tata', 'bently', 'benz']
// console.log(typeof cars);


// object
const user = {
    name: "dev",
    age: 19,
    address: "surat"
}
// console.log(typeof user);

//function
const hero = function(){
    console.log("hello");
}
// console.log(typeof hero);


/************************stack and heat*********************** */
//stack
let myName = "devpatel"

let myanothername = myName
myanothername = "devvirani"
console.log(myanothername);
console.log(myName);


// heat
let yourName = {
    name:"jay",
    email:"jay@gmail.com"
}

let youranothername = yourName
youranothername.email = "jaypatel@gmail.com"
console.log(youranothername);
console.log(yourName);

