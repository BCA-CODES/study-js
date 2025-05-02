// Immediately Invoked Function Expressions

(function first(){
    console.log(`first is executed`)
})();

((username) => {
    console.log(`second is executed ${username}`)
})('Dev');

(function third(){
    console.log(`third is executed`)
})()
