import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDE74kEJt5CCB-Y_Kl_4OB-p9qe3c6TtMo",
    authDomain: "fir-93d66.firebaseapp.com",
    projectId: "fir-93d66",
    storageBucket: "fir-93d66.appspot.com",
    messagingSenderId: "545181922978",
    appId: "1:545181922978:web:d840c4b466a64746de09fb",
    measurementId: "G-DHG5545Z3E"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();