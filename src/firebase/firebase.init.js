// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaZZEksgHQpYKGzjLRUbwEGDWGkUzsi8Y",
  authDomain: "simple-firebase-dfd02.firebaseapp.com",
  projectId: "simple-firebase-dfd02",
  storageBucket: "simple-firebase-dfd02.appspot.com",
  messagingSenderId: "232152222",
  appId: "1:232152222:web:a21f3c905a0846a5f22f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;