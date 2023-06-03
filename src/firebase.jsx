// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm9xFK-MNlwEaWPprII4mQDBETzUMvTzw",
  authDomain: "fashioncart-a8961.firebaseapp.com",
  projectId: "fashioncart-a8961",
  storageBucket: "fashioncart-a8961.appspot.com",
  messagingSenderId: "94650864579",
  appId: "1:94650864579:web:811567f25d4de91fa62376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
