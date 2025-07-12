// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-V-_-Gsqz7QymR_rAeoFGie89FD3gJxM",
  authDomain: "swiggy-auth-99bdd.firebaseapp.com",
  databaseURL: "https://swiggy-auth-99bdd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swiggy-auth-99bdd",
  storageBucket: "swiggy-auth-99bdd.firebasestorage.app",
  messagingSenderId: "102836249319",
  appId: "1:102836249319:web:0f94e036ea050b1e693842",
  measurementId: "G-QM4PDWCYMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}