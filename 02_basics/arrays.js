const myarr = [1,4,3,6,5]
// console.log(myarr[4])

const hero = ["ironman","spiderman","captain america"]
const mynew = new Array(1,2,3,5,7);
// console.log(mynew[3])
// console.log(hero[1])

/***************methods************* */
// console.log(mynew.push(0));
// console.log(mynew);

// console.log(mynew.pop());
// console.log(mynew);

// console.log(mynew.unshift(21));
// console.log(mynew);

// console.log(mynew.shift());
// console.log(mynew);

// console.log(mynew.indexOf(4));
// console.log(mynew);

const firstarr = mynew.slice(1,3)
console.log("X",firstarr);
console.log(mynew);


const secondarr = mynew.splice(1,3)
console.log("Y",secondarr);
console.log(mynew);