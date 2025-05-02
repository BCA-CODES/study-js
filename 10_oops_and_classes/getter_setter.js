class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}`.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hello`.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const dev = new user("Dev@google.com","789")
console.log(dev.password);
console.log(dev.email);