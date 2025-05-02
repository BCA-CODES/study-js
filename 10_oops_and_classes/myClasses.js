// class user{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password

//     }

//     encryptPass(){
//         return `${this.password}xyz`        
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const dev = new user("Dev","dev@gmail.com","521")

// console.log(dev.encryptPass());
// console.log(dev.changeUsername());


//behind the scene

function user(username,email,password){
    this.username = username
    this.email = email
    this.password = password   
}

user.prototype.encryptPass = function(){
    return `${this.password}xyz`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const jay = new user("jay","jay@gmail.com","123")

console.log(jay.encryptPass());
console.log(jay.changeUsername());