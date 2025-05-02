class user{
    constructor(username){
        this.username = username
    }

    knowMe(){
        console.log(`username is ${this.username}`);
    }

    static createdId(){
        console.log("123");
        
    }
}

// const dev = new user("Dev")
// dev.createdId()


class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const jay = new teacher("jay","jay@gmail.com")
jay.knowMe()