const mynum = [11,22,33,44,55,66,77]

// const myrealnum = mynum.map( (num) => num + 1)

const myrealnum = mynum.map( (num) => num * 10).map((num) => num + 1).filter((num) => num <= 330)
console.log(myrealnum);
