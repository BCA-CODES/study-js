const indian_heros = ["shaktimaan","hanuman","krrish"]
const marvel_heros = ["ironman","antman","hulk"]

// indian_heros.push(marvel_heros)

// console.log(indian_heros);

// console.log(indian_heros.concat(marvel_heros));

const allheros = [...marvel_heros, ...indian_heros];
// console.log(allheros);

const seondarray = [1,2,3,[6,5,4],7,8,[9,0]]
// console.log(seondarray.flat(Infinity))

console.log(Array.isArray("dev"));
console.log(Array.from("dev"));


let marks = 100
let marks1 = 300
let marks2= 400

console.log(Array.of(marks,marks1,marks2));
