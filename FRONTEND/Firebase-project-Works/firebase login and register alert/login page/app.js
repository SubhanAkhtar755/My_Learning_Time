
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBToEkvxspqEQl4qBKu4OTJ8BcU_iqfWrw",
  authDomain: "login-form-34572.firebaseapp.com",
  projectId: "login-form-34572",
  storageBucket: "login-form-34572.firebasestorage.app",
  messagingSenderId: "47566707376",
  appId: "1:47566707376:web:ab1abd7f8afcabef5bb975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





let btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');



  console.log('test');
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);

      // ..
    });
})