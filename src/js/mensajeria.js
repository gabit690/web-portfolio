// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtcHrkqWuOL1mddWV_JYEwFld5ua4XkpM",
    authDomain: "portfolio-d61ea.firebaseapp.com",
    databaseURL: "https://portfolio-d61ea.firebaseio.com",
    projectId: "portfolio-d61ea",
    storageBucket: "portfolio-d61ea.appspot.com",
    messagingSenderId: "1059639054357",
    appId: "1:1059639054357:web:dccc14934068c2a3fafe1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let mensajeRef = firebase.database().ref().child('contacto');

document.getElementById('formulario-contacto').addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    let nombre = getVal('nombre-usuario');
    let email = getVal('email');
    let asunto = getVal('asunto');
    let mensaje = getVal('area-mensaje');

    enviarMensaje(nombre, email, asunto, mensaje);

    document.getElementById('formulario-contacto').style.display = 'none';

    document.getElementById('mensaje-enviado').style.display = 'flex';
}

function getVal(id) {
    return document.getElementById(id).value;
}

function enviarMensaje(name, email, asunto, mensaje) {
    let nuevoMensajeRef = mensajeRef.push();
    nuevoMensajeRef.set({
        nombre: name,
        correo: email, 
        asunto: asunto,
        mensaje: mensaje
    });
}