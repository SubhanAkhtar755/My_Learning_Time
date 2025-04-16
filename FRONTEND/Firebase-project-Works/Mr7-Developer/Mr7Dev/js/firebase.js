import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider

} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

import {
  doc,
  setDoc,
  getFirestore,
  getDoc
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmkZaVrGlDPqkdfjZuvoiuy2C34JzCKsE",
  authDomain: "mr7dev-e80ad.firebaseapp.com",
  projectId: "mr7dev-e80ad",
  storageBucket: "mr7dev-e80ad.firebasestorage.app",
  messagingSenderId: "968602038878",
  appId: "1:968602038878:web:3e39e4cf489f0e7a25facf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  googleProvider,
  GoogleAuthProvider,
  signInWithPopup,
  facebookProvider,
  FacebookAuthProvider,
  doc,
  setDoc,
  db,
  getDoc
}


