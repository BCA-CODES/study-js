//for loop

for (let i = 0; i <= 5; i++) {
    if (i == 5) {
        //console.log("5 is the popular number");
        
    }
    //console.log(i);
    
}

for (let i = 1; i <= 5; i++) {
    //console.log("outer loop:",i);
    for (let j = 1; j <= 5; j++) {
        //console.log(i ,"*", j, "=", i*j)    
        
    }    
}

// let myarr = ["car","bus","bike"]
// console.log(myarr.length);

// for (let a = 0; a < myarr.length; a++) {
//     const element = myarr[a];
//     console.log(element);   
// }

// for (let i = 1; i <= 10; i++) {
//     if (i==5) {
//         console.log("5 is located")
//         break
//     }
//     console.log(`number is : ${i}`);
// }

for (let i = 1; i <= 10; i++) {
    if (i==5) {
        console.log("5 is located")
        continue;
    }
    console.log(`number is : ${i}`);
}


