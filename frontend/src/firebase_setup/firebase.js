// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuqt0pT0vQgNkgaqSkEzY1IOvFb1Wqn4w",
  authDomain: "hack4good-kidney.firebaseapp.com",
  projectId: "hack4good-kidney",
  storageBucket: "hack4good-kidney.appspot.com",
  messagingSenderId: "833586216231",
  appId: "1:833586216231:web:38ec920b9a84d965863d02",
  measurementId: "G-6VXHPK5K42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)