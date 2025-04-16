
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
import { getStorage, ref , uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-storage.js'



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
const storage = getStorage(app);

const uploadToStorage = (file) => {
    return new Promise((resolve, reject) => {
        const fileName = file.name;
    const storageRef = ref(storage, 'images/rivers.jpg');

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
reject(error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // The file's download URL
            resolve(downloadURL);
            console.log('File available at', downloadURL);
          });
        }
      );
      

});

}



let upbtn = document.getElementById('upbtn');


 upbtn.addEventListener('click', (e) => {
console.log('success');
let file = document.getElementById('file');
const URL = uploadToStorage(file.files[0]);
console.log(URL);

 });




file.addEventListener('change', (e) => {
    let image = document.getElementById('image');
    image.src = URL.createObjectURL(e.target.files[0]);
});



