// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKTr4kdMWqwGkwWHgMX4eXvy9Us0w_lKs",
  authDomain: "flashcardsapp-7647a.firebaseapp.com",
  projectId: "flashcardsapp-7647a",
  storageBucket: "flashcardsapp-7647a.appspot.com",
  messagingSenderId: "496698263049",
  appId: "1:496698263049:web:872c322cf5869c5e71dad8",
  measurementId: "G-SZPCWB0KWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}