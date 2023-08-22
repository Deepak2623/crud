// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaTmbBrlxL3ntEy8ait9XBIumWfX5Yy3M",
  authDomain: "crud-37c7c.firebaseapp.com",
  projectId: "crud-37c7c",
  storageBucket: "crud-37c7c.appspot.com",
  messagingSenderId: "746002267327",
  appId: "1:746002267327:web:5738abec5fb182264f5a0a",
  measurementId: "G-ZBHX6N37TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
