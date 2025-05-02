function myfun(num1, num2){
    // let result = num1 * num2
    // return result
    return num1 * num2
}

const result = myfun(2,5)
// console.log("Result:",result)


function userlogin(username="user"){
    if (!username) {
        console.log("please enter a username")
        return
    }
    return `${username} just log in`
}

// console.log(userlogin("dev"))


function calcartprice(num1,num2,...price){
    return price
}

console.log(calcartprice(50,450,210,1000))

const user = {
    username: "dev",
    emails: "dev@google.com"
}

function myobject(anyobj){
    console.log(`hello my name is ${anyobj.username} and my email id is ${anyobj.email}`)
}

// myobject(user)
myobject({
    username:"devel",
    email: "devel@gmail.com"
})

const myarray = [150,300,550]

function myarrayfun(myarr){
    return myarr[2]
}

// console.log(myarrayfun(myarray));
console.log(myarrayfun([240,624,247]))
