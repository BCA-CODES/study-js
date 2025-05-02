const name = "jay"
const score = 85

console.log(`hello my name is ${name} and my score is ${score}.`);


const myname = new String("  Devpatel")
console.log(myname.toUpperCase());

console.log(myname.charAt(5));
console.log(myname.indexOf('e'));

console.log(myname.trim());

let url = "https://dev.com/dev%10patel"
console.log(url.replace('%10','-'));

console.log(url.includes("devel"));

console.log(myname.anchor());
console.log(myname.at(-7));
console.log(myname.length);

console.log(myname.split('-'));

console.log(myname.slice(-8,4));
console.log(myname.substring(0,4));
