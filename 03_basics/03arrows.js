const user1 = {
    name : "dev",
    email : "dev@google.com",

    welcomemessage: function () {
        console.log(`${this.name} welcome to our website`);
        console.log(this);
    }
}
// user1.welcomemessage()
// user1.name = "jay"
// user1.welcomemessage()
// console.log(this);


// function one(){
//     let username = "devel"
//     console.log(this.username);
// }

// one()

// function food(f1,f2){                      //if {} using then write return keyword
//     return f1 + f2
// }

// const myfood = (f1,f2) =>  f1 + f2

const myfood = (f1,f2) =>  ({username:"dev"})

console.log(myfood("jalebi"," fafda"))