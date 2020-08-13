import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpiyCNEfr2pDqYdGEKtsyb-42CtCJTYaU",
  authDomain: "booksearchapp-96eb1.firebaseapp.com",
  databaseURL: "https://booksearchapp-96eb1.firebaseio.com",
  projectId: "booksearchapp-96eb1",
  storageBucket: "",
  messagingSenderId: "746434553040",
  appId: "1:746434553040:web:89581eeaf36c8202beaad5",
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
