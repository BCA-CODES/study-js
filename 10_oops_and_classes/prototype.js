let cars = ["tesla","byd"]

let cartype = {
    tesla: "diseal",
    byd: "electric",

    getbydpower : function () {
        console.log(`byd power is ${this.byd}`);
        
    }
}

Object.prototype.dev = function(){
    console.log(`dev is present at all`);
           
}


Array.prototype.hellodev = function(){
    console.log(`hello, dev is present`);
    
}

cartype.dev()
cartype.hellodev()