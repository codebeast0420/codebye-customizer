// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is 
const firebaseConfig = {
  apiKey: "AIzaSyBx-dU-W3ySG4BCd2gVZc1D8OnbFvL6-jk",
  authDomain: "codebyedge-5fc98.firebaseapp.com",
  projectId: "codebyedge-5fc98",
  storageBucket: "codebyedge-5fc98.appspot.com",
  messagingSenderId: "592640220295",
  appId: "1:592640220295:web:9690cf549afad623ba6c22",
  measurementId: "G-9SYMGK5N11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDB = getFirestore(app)
export {firebaseDB}