// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1gXptjLXCpsh6CNt0UybZR2YzuRZc5Q",
  authDomain: "robust-construction-1f942.firebaseapp.com",
  projectId: "robust-construction-1f942",
  storageBucket: "robust-construction-1f942.appspot.com",
  messagingSenderId: "340078123514",
  appId: "1:340078123514:web:0f67280839d001b38aec43"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
