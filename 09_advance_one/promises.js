// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise solved");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Another async operation complete");
//         resolve();
//     }, 2000);
// }).then(function(){
//     console.log("Another promise solved");
// })


const promiseThree = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve({username:"dev",password:"1452"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"dev",pass:"125"})
        } else {
            reject('ERROR: SOMETHINGS WENTS WRONG')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("promise four is either resolved or rejected."))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"javascript",pass:"1225"})
        } else {
            reject('ERROR: SOMETHINGS WENTS WRONG')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const user = await promiseFive
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getallusers(){
//     try {
//         const users = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await users.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))