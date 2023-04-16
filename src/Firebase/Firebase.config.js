// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMgogoormKFfHxrrRYWLb2LJsjUZBb1E",
  authDomain: "react-auth-and-private-router.firebaseapp.com",
  projectId: "react-auth-and-private-router",
  storageBucket: "react-auth-and-private-router.appspot.com",
  messagingSenderId: "21752699662",
  appId: "1:21752699662:web:5cb60e7e3b3fc99e3d955f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;