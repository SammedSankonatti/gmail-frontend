import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAx0xBlbYPfsL-oqW8UBHBoHlFsK-bmD-o",
  authDomain: "fir-e3b99.firebaseapp.com",
  projectId: "fir-e3b99",
  storageBucket: "fir-e3b99.appspot.com",
  messagingSenderId: "169055125581",
  appId: "1:169055125581:web:7256130bdf327a5db71c04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db=firebaseApp.firestore();

const auth= firebase.auth();
const provider=  new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};