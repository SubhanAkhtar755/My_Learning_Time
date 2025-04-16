import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9xuttm2j6WatFYNw5RBGx6nmUEziJQkY",
    authDomain: "food-app-c3dc2.firebaseapp.com",
    projectId: "food-app-c3dc2",
    storageBucket: "food-app-c3dc2.firebasestorage.app",
    messagingSenderId: "999034383061",
    appId: "1:999034383061:web:40460e70b894348bcb105c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
};
