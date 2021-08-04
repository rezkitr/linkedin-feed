import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDW3C8eMGIGT_DmV-EK4WOPsOI8MHlMDfo",
  authDomain: "linkedin-clone-rt-89304.firebaseapp.com",
  projectId: "linkedin-clone-rt-89304",
  storageBucket: "linkedin-clone-rt-89304.appspot.com",
  messagingSenderId: "633524750861",
  appId: "1:633524750861:web:113ee3e0b6280106d86344",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
