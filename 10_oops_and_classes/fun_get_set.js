function user(email,password) {
    this._email = email
    this._password = password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })
    
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })

}

const dev = new user("chai@masala.com","13579")
console.log(dev.email);
console.log(dev.password);
