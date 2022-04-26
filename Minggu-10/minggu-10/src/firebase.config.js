// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default {
  apiKey: "AIzaSyAKETi4_yKMqV4r7dJ7h2gEu6rS5QO5r0M",
  authDomain: "minggu-10-49a71.firebaseapp.com",
  projectId: "minggu-10-49a71",
  storageBucket: "minggu-10-49a71.appspot.com",
  messagingSenderId: "767373181449",
  appId: "1:767373181449:web:7698ef37df70d89ddbeed8",
  measurementId: "G-DK1JGDHGY1"
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);