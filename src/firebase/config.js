// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'; 



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP0kvbuXRtoUxaTnMq-lKKGd7uDJyDxdM",
  authDomain: "react-chat-db635.firebaseapp.com",
  projectId: "react-chat-db635",
  storageBucket: "react-chat-db635.appspot.com",
  messagingSenderId: "343599557883",
  appId: "1:343599557883:web:a49638945264fd57aed45e",
  measurementId: "G-5MRG9WH0H8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
firebase.analytics(app); 

const auth = firebase.auth()
const db = firebase.firestore();

if(window.location.hostname==='localhost'){
  db.useEmulator('localhost', '8080')
  auth.useEmulator("http://localhost:9099")

}

export {auth , db}
export default firebase
