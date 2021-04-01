import React from 'react'
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBXCB9vBSeBcE0HUJcsHdORSModLPrqgFA",
    authDomain: "flatfindervm.firebaseapp.com",
    projectId: "flatfindervm",
    storageBucket: "flatfindervm.appspot.com",
    messagingSenderId: "812641140468",
    appId: "1:812641140468:web:d8a73f4f66aeab6eeda8a1",
    measurementId: "G-4GNK6X7HXQ"
    }
)

export const auth = app.auth()