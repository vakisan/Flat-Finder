import {UserDatabase} from './Database'
import {auth} from './Init'

export default class Registration{

    constructor(unregisteredUser){
        let registeredUser;
        if(unregisteredUser.validateEmail()){
            auth.createUserWithEmailAndPassword(unregisteredUser.email,unregisteredUser.password)
            .then((userCredential) => {
                registeredUser = userCredential.user
                new UserDatabase().addUser(unregisteredUser,registeredUser)
            })
            .then(() => {
                registeredUser.sendEmailVerification()
                .then(() => {
                    // Email sent.
                    alert(`An email has been sent to : ${registeredUser.email} to verify your account.`)
                  }).catch(function(error) {
                    // An error happened.
                    alert("Email failed to be sent. Please contact support.")
                  });

                return true
            })
            .catch((error) => {
                alert(error)
                return error
            })
        }
    }
}