// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYb9yDBmsRL98wibcnPGw7IuoQAeI5c14",
  authDomain: "juicy-restaurent.firebaseapp.com",
  projectId: "juicy-restaurent",
  storageBucket: "juicy-restaurent.appspot.com",
  messagingSenderId: "1011353729540",
  appId: "1:1011353729540:web:2cc6faf310f61e242d1351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
