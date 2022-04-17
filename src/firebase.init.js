// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-tYIOLIXX41ymzQ1RG6v_BgUcvgwnorw",
    authDomain: "fitness-gym-9e553.firebaseapp.com",
    projectId: "fitness-gym-9e553",
    storageBucket: "fitness-gym-9e553.appspot.com",
    messagingSenderId: "744266485889",
    appId: "1:744266485889:web:6207c76ab345099cfafd80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
