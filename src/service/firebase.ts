import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
  apiKey: "AIzaSyDl5-Bxop1btVZKDC7vZrUrgaRZtE81xFY",
  authDomain: "test-task-38cec.firebaseapp.com",
  projectId: "test-task-38cec",
  storageBucket: "test-task-38cec.appspot.com",
  messagingSenderId: "399245517476",
  appId: "1:399245517476:web:a3981a37c4308f14a0fc31",
  measurementId: "G-Y9V04PMB0X"
}
firebase.initializeApp(config)

 const auth = firebase.auth().signInAnonymously();
 const firestore = firebase.firestore()

export {auth,firestore}
