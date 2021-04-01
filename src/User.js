import { auth } from './Authorisation'

export class User{

    constructor(username,password){
        this.username = username
        this.password = password
        this.userType = this.constructor.name
    }

    Register(){
        console.log(this)
        console.log(auth)
        if(this instanceof Seeker){
            this.RegisterSeeker()    
        }
        else if(this instanceof Advertiser){
            this.RegisterAdvertiser()
        }
    }

}

class Registration{

    constructor(user){
        
    }
}

export class Seeker extends User{

    //Generates a new Seeker
    constructor(username, password){
        super(username, password)
    }

    RegisterSeeker(){
        auth.createUserWithEmailAndPassword(this.username,this.password)
        .then((userCredential) => {
            let user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        })
    }

}

export class Advertiser extends User{

    //Generates a new Advertiser
    constructor(username, password){
        super(username, password)
    }

    RegisterAdvertiser(){
        console.log(this.userType)
    }

}

let user1 = new Advertiser("Hello","Vakisan")
let user2 = new Seeker("Ho@hello2.com","HelloThere VM")

console.log(1)
//user1.Register()
user2.Register()