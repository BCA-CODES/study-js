const cars = ["tesla","byd","gml","toyota","tata"]

// const obj = cars.forEach( (val) => {
//     console.log(val);
// })

// console.log(obj);

const nums = [1,2,3,4,5,6,7]

let realnums = nums.filter( (num) => {
    return num > 3
})

// console.log(realnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let realbooks = books.filter( (bk) => bk.genre === "Science")
 
let realbooks = books.filter( (bk) =>bk.genre === "Science" && bk.publish >= 1990)

console.log(realbooks);

