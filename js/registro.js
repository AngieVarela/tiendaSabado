import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let btnRegistro=document.getElementById("btnregistro")
let modalInformativo= new bootstrap.Modal(document.getElementById('modalinformativo'))

btnRegistro.addEventListener("click", function(event){

    event.preventDefault()
    
    let correo = document.getElementById("correo").Value
    let password = document.getElementById("password").Value

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correo, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
    let textoinformativo = document.getElementById("informacióngeneral")
    let formulario=document.getElementById("formularioderegistro")
    formulario.reset()
    textoinformativo.textContent="Exito registrandote"
    modalInformativo.show()
    setTimeout(function(){
      modalInformativo.hide()
    },2000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    let textoinformativo = document.getElementById("informacióngeneral")
    textoinformativo.textContent="Falla: "+error.message
    modalInformativo.show()
  });

})