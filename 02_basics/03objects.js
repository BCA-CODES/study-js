const mysym = Symbol("id")

const myobject = {
    name:'dev',
    email: 'dev@gmail.com',
    isloggedin: true,
    [mysym]: "id"
}

// console.log(myobject.email);
// console.log(myobject["name"]);
// console.log(myobject[mysym]);

myobject.name = "devpatel"
// Object.freeze(myobject)
myobject.name = "develpatel"
// console.log(myobject);


myobject.greetings = function(){
    console.log("hello world");
}

myobject.greetings2 = function(){
    console.log(`hello world, i am ${this.name}`);
}

console.log(myobject.greetings())
console.log(myobject.greetings2())