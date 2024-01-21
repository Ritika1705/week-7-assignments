// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXfVyw-LAUUhCHAg5DZiLuAUhI09uT7sA",
  authDomain: "otp-project-386fc.firebaseapp.com",
  projectId: "otp-project-386fc",
  storageBucket: "otp-project-386fc.appspot.com",
  messagingSenderId: "222008108282",
  appId: "1:222008108282:web:b1e856991253b693a49543",
  measurementId: "G-3TZJSVD1XP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)