  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyChYolG6f6B-bXP-jfqBSFepE_kUXupQn4",
    authDomain: "tienda3-92ac0.firebaseapp.com",
    projectId: "tienda3-92ac0",
    storageBucket: "tienda3-92ac0.appspot.com",
    messagingSenderId: "99163822863",
    appId: "1:99163822863:web:19a6e7311a6cb7b24a3c7a",
    measurementId: "G-7NWL93Y9EC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);