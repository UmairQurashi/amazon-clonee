import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSMUBXPr1LzRsna-fFNPKecV4RM83H1cA",
  authDomain: "clone-5e482.firebaseapp.com",
  projectId: "clone-5e482",
  storageBucket: "clone-5e482.appspot.com",
  messagingSenderId: "673518999677",
  appId: "1:673518999677:web:06d621abeff87a19063914",
  measurementId: "G-GP0ES8EH35",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
