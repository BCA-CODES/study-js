function createUser(username,price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
    
}

const dev = new createUser("dev",20)
const jay = new createUser("jay",30)

jay.printMe()