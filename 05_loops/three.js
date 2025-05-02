// for of
const num1 = [3,2,5,4,8,4]
for (const num of num1) {
    //console.log(`number is :${num}`);
    
}

const username = "dev patel"
for (const user of username) {
    if (user == ' ') {
        // console.log("space found");
        continue
    }
    // console.log(`String is :${user}`);
    
}

//map
const map1 = new Map()

map1.set("IN","india")
map1.set("UK","united kingdom")
map1.set("GR","germany")

// console.log(map1);

for (const [key,value] of map1) {
    // console.log(key,"-",value);   
}


const myobj = {username:"dev",email:"dev@outlook.com"}

for (const obj of myobj) {
    console.log(obj)
}