import {UserDatabase,ChatDatabase} from './Database'
import {auth} from './Init'
import {User} from './User'

export default class Authentication{
    
    Login(unAuthenticatedUser){
        if(unAuthenticatedUser instanceof User){
            auth.signInWithEmailAndPassword(unAuthenticatedUser.email, unAuthenticatedUser.password)
            .then((currentUser) => {
                // Signed in
                this.fetchUserInfo(currentUser.user.uid)
                .then(doc => {
                    window._globalUserData_.UserInfo = doc.data()
                    alert(`Logged in as : ${window._globalUserData_.UserInfo.Username}`)
                })
            })
            .catch((error) => {
                alert(error)
            });
        }
    }

    fetchUserInfo(currentUser){
        return new UserDatabase().getUserInfo(currentUser)
    }

    Logout(){
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log("Logged out")
          }).catch((error) => {
            // An error happened.
          });
    }

    changePassword(newPassword){
        auth.currentUser.updatePassword(newPassword)
        .then(
            () => {
            // Update successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    resetPassword(resetEmail){
        auth.sendPasswordResetEmail(resetEmail)
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }
}

// const chatRoomInstance = {}
                    // ChatRoomsSnapshot.forEach((ChatRoom)=>{
                    //     let chatRoomKey = ChatRoom.id
                    //     chatRoomInstance[chatRoomKey] = null
                    //     this.fetchUserChatState(currentUser,chatRoomKey)
                    //     .then((MessagesSnapshot)=>{
                    //         console.log(MessagesSnapshot)
                    //         MessagesSnapshot.forEach((Message)=>{
                    //             let messageKey = Message.id
                    //             chatRoomInstance[chatRoomKey].messageInstance[messageKey] = Message.data()
                    //         })
                    //     })
                    // })
                    // console.log(chatRoomInstance)
                    // window._globalUserData_.ChatRooms = chatRoomInstance