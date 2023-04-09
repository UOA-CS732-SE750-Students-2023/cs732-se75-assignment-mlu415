import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDE74kEJt5CCB-Y_Kl_4OB-p9qe3c6TtMo",
    authDomain: "fir-93d66.firebaseapp.com",
    projectId: "fir-93d66",
    storageBucket: "fir-93d66.appspot.com",
    messagingSenderId: "545181922978",
    appId: "1:545181922978:web:d840c4b466a64746de09fb",
    measurementId: "G-DHG5545Z3E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };

