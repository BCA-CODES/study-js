const user = {
    username: "dev",
    pass: 1254,
    loggedin: true,

    userdetails: function () {
        // console.log("user all details")
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.userdetails());
// console.log(this);


function user2(username,isloggedin,loggedcount) {
    this.username = username
    this.isloggedin = isloggedin
    this.loggedcount = loggedcount

    this.greetings = function () {
        console.log(`welcome ${this.username}`)
    }
   
    // return this
}
const u2 = new user2("dev",true,12)
const u3 = new user2("jay",true,10)
console.log(u2)
console.log(u3)