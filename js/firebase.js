 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAs9-Pjl_q4Ih4Buu83sBwJ7CmWRAEQEWs",
   authDomain: "tienda2-5da4d.firebaseapp.com",
   projectId: "tienda2-5da4d",
   storageBucket: "tienda2-5da4d.appspot.com",
   messagingSenderId: "220351766962",
   appId: "1:220351766962:web:c90f06c4fd6af05cc904ab",
   measurementId: "G-4JNHNX06QY"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);