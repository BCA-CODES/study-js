let a = 40
const b = 50

if(true){
    let a = 10
    const b = 20
   
    // console.log("inner a:",a);
    // console.log("inner b:",b);
    
}

// console.log(a);
// console.log(b);
// console.log(c);



function firstuser(){
    const username = "devpatel"
    
    function seconduser(){
        const website = "google"
        console.log(username);
         
    }
    // console.log(website);
    seconduser()
}

// firstuser()
if (true) {  
    const username = "dev"
    if (username === "dev") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);


console.log(user(6))
function user(number){
    return number + 1 
}


const myuser = function user2(num2) {
    return num2 + 2
}
console.log(myuser(5))

