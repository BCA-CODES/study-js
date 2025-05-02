class student{
    constructor(username){
        this.username = username
    }

    knowMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends student{
    constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass
    }

    addSubject(){
        console.log( `new subject was added by ${this.username}`)
    }
}

const dev = new teacher("dev","dev@gmail.com","1254")
dev.addSubject()

const jay = new student("dev")
jay.knowMe()

console.log(dev instanceof student);
