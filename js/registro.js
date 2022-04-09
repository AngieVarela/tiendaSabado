import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let btnRegistro=document.getElementById("btnregistro")
btnRegistro.addEventListener("click", function(event){

    event.preventDefault()
    
    let correo = document.getElementById("correo").Value
    let password = document.getElementById("password").Value

    const auth = getAuth();
createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log("exito")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage)
  });

})