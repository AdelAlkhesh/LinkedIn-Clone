import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRq7w6m9M5VhEzN4L7ZOgIxnzLhZVb6Mo",
  authDomain: "linkedin-clone-adel.firebaseapp.com",
  databaseURL:
    "https://linkedin-clone-adel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "linkedin-clone-adel",
  storageBucket: "linkedin-clone-adel.appspot.com",
  messagingSenderId: "590088614209",
  appId: "1:590088614209:web:dfec295afb891b9a3a71c0",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
