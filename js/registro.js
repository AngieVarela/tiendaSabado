import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonregistro=document.getElementById("btnregistro")
let modalInformativo=new bootstrap.Modal(document.getElementById('modalinformativo'))

botonregistro.addEventListener("click",function(evento){

    evento.preventDefault()
   
    let correo =document.getElementById("correo").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
        let textoinformativo=document.getElementById("informaciongeneral")
        let formulario=document.getElementById("formularioderegistro")
        formulario.reset()
        textoinformativo.textContent="REGISTRADO CORRECTAMENTE!!"
        modalInformativo.show()
        setTimeout(function(){
            modalInformativo.hide()
        },2000)
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        let textoinformativo=document.getElementById("informaciongeneral")
        textoinformativo.textContent="Falla: "+errorMessage
        modalInformativo.show()
        setTimeout(function () {
            modalInformativo.hide()
        }, 2000);
    });
    
   

})