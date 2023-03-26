import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBubPW5xK3v0mKVeU2coG9T5G4CCDChpOE",

  authDomain: "mad-house-f1199.firebaseapp.com",

  projectId: "mad-house-f1199",

  storageBucket: "mad-house-f1199.appspot.com",

  messagingSenderId: "511592402800",

  appId: "1:511592402800:web:3b532400ea00817e1c89b5",

  measurementId: "G-S6L4V1S9VC"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
// document.getElementById('file').addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   const storageRef = app.storage().ref('database/' + file.name);
//   storageRef.put(file);
// });