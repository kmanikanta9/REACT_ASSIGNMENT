
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBViIZ7gyC9wD_rTeLwiFy0zJYiJq7Gf2U",
  authDomain: "project-tracker-c34bb.firebaseapp.com",
  databaseURL: "https://project-tracker-c34bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-tracker-c34bb",
  storageBucket: "project-tracker-c34bb.firebasestorage.app",
  messagingSenderId: "224412953348",
  appId: "1:224412953348:web:a38a783c286428f4dabe51",
  measurementId: "G-KS82LTXBMV"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}