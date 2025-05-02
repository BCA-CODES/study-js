function userdetails(username) {
    this.username = username

}

function anotherdetails(username,password,email){
    userdetails.call(this,username)

    this.password = password
    this.email = email
}

const user = new anotherdetails("dev","4185","dev@example.com")
console.log(user);
